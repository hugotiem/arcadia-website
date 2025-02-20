'use client'

import { useState, ChangeEvent } from 'react'

export default function EmailInput() {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isTouched, setIsTouched] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValid(validateEmail(value))
    if (!isTouched) setIsTouched(true)
  }

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-shadow ${
            !isValid && isTouched
              ? 'border-red-300 focus:ring-red-200'
              : isValid && email.length > 0
              ? 'border-green-300 focus:ring-green-200'
              : 'border-gray-200 focus:ring-gray-200'
          }`}
          required
        />
        {!isValid && isTouched && (
          <p className="mt-1 text-xs text-red-500">
            Veuillez entrer une adresse email valide
          </p>
        )}
        {isValid && email.length > 0 && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
} 