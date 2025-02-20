'use client'

import { useState, ChangeEvent } from 'react'
import { countries } from './PhoneInput'

interface CountrySelectProps {
  value?: string
  onChange?: (countryCode: string) => void
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [isTouched, setIsTouched] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!isTouched) setIsTouched(true)
    onChange?.(e.target.value)
  }

  const sortedCountries = [...countries].sort((a, b) => 
    a.name.localeCompare(b.name, 'fr')
  )

  return (
    <div>
      <label htmlFor="pays" className="block text-sm font-light text-gray-600 mb-2">
        Pays d&apos;origine
      </label>
      <div className="relative">
        <select
          id="pays"
          name="pays"
          value={value || ''}
          onChange={handleChange}
          className={`w-full px-4 py-2 pr-8 border rounded-md focus:outline-none focus:ring-2 transition-shadow appearance-none ${
            value
              ? 'border-green-300 focus:ring-green-200'
              : isTouched
              ? 'border-red-300 focus:ring-red-200'
              : 'border-gray-200 focus:ring-gray-200'
          }`}
          required
        >
          <option value="">Sélectionnez votre pays</option>
          {sortedCountries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {value && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      {!value && isTouched && (
        <p className="mt-1 text-xs text-red-500">
          Veuillez sélectionner votre pays d&apos;origine
        </p>
      )}
    </div>
  )
} 