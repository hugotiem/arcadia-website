'use client'

import { useState, ChangeEvent } from 'react'

interface Country {
  code: string
  name: string
  prefix: string
  flag: string
}

// Liste complète des pays avec leurs indicatifs
export const countries: Country[] = [
  { code: 'AF', name: 'Afghanistan', prefix: '+93', flag: '🇦🇫' },
  { code: 'ZA', name: 'Afrique du Sud', prefix: '+27', flag: '🇿🇦' },
  { code: 'AL', name: 'Albanie', prefix: '+355', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algérie', prefix: '+213', flag: '🇩🇿' },
  { code: 'DE', name: 'Allemagne', prefix: '+49', flag: '🇩🇪' },
  { code: 'AD', name: 'Andorre', prefix: '+376', flag: '🇦🇩' },
  { code: 'AO', name: 'Angola', prefix: '+244', flag: '🇦🇴' },
  { code: 'SA', name: 'Arabie Saoudite', prefix: '+966', flag: '🇸🇦' },
  { code: 'AR', name: 'Argentine', prefix: '+54', flag: '🇦🇷' },
  { code: 'AM', name: 'Arménie', prefix: '+374', flag: '🇦🇲' },
  { code: 'AU', name: 'Australie', prefix: '+61', flag: '🇦🇺' },
  { code: 'AT', name: 'Autriche', prefix: '+43', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgique', prefix: '+32', flag: '🇧🇪' },
  { code: 'BR', name: 'Brésil', prefix: '+55', flag: '🇧🇷' },
  { code: 'BG', name: 'Bulgarie', prefix: '+359', flag: '🇧🇬' },
  { code: 'CA', name: 'Canada', prefix: '+1', flag: '🇨🇦' },
  { code: 'CL', name: 'Chili', prefix: '+56', flag: '🇨🇱' },
  { code: 'CN', name: 'Chine', prefix: '+86', flag: '🇨🇳' },
  { code: 'CY', name: 'Chypre', prefix: '+357', flag: '🇨🇾' },
  { code: 'CO', name: 'Colombie', prefix: '+57', flag: '🇨🇴' },
  { code: 'KR', name: 'Corée du Sud', prefix: '+82', flag: '🇰🇷' },
  { code: 'HR', name: 'Croatie', prefix: '+385', flag: '🇭🇷' },
  { code: 'DK', name: 'Danemark', prefix: '+45', flag: '🇩🇰' },
  { code: 'EG', name: 'Égypte', prefix: '+20', flag: '🇪🇬' },
  { code: 'AE', name: 'Émirats Arabes Unis', prefix: '+971', flag: '🇦🇪' },
  { code: 'ES', name: 'Espagne', prefix: '+34', flag: '🇪🇸' },
  { code: 'EE', name: 'Estonie', prefix: '+372', flag: '🇪🇪' },
  { code: 'US', name: 'États-Unis', prefix: '+1', flag: '🇺🇸' },
  { code: 'FI', name: 'Finlande', prefix: '+358', flag: '🇫🇮' },
  { code: 'FR', name: 'France', prefix: '+33', flag: '🇫🇷' },
  { code: 'GR', name: 'Grèce', prefix: '+30', flag: '🇬🇷' },
  { code: 'HK', name: 'Hong Kong', prefix: '+852', flag: '🇭🇰' },
  { code: 'HU', name: 'Hongrie', prefix: '+36', flag: '🇭🇺' },
  { code: 'IN', name: 'Inde', prefix: '+91', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonésie', prefix: '+62', flag: '🇮🇩' },
  { code: 'IE', name: 'Irlande', prefix: '+353', flag: '🇮🇪' },
  { code: 'IS', name: 'Islande', prefix: '+354', flag: '🇮🇸' },
  { code: 'IL', name: 'Israël', prefix: '+972', flag: '🇮🇱' },
  { code: 'IT', name: 'Italie', prefix: '+39', flag: '🇮🇹' },
  { code: 'JP', name: 'Japon', prefix: '+81', flag: '🇯🇵' },
  { code: 'LU', name: 'Luxembourg', prefix: '+352', flag: '🇱🇺' },
  { code: 'MY', name: 'Malaisie', prefix: '+60', flag: '🇲🇾' },
  { code: 'MA', name: 'Maroc', prefix: '+212', flag: '🇲🇦' },
  { code: 'MX', name: 'Mexique', prefix: '+52', flag: '🇲🇽' },
  { code: 'MC', name: 'Monaco', prefix: '+377', flag: '🇲🇨' },
  { code: 'NO', name: 'Norvège', prefix: '+47', flag: '🇳🇴' },
  { code: 'NZ', name: 'Nouvelle-Zélande', prefix: '+64', flag: '🇳🇿' },
  { code: 'NL', name: 'Pays-Bas', prefix: '+31', flag: '🇳🇱' },
  { code: 'PL', name: 'Pologne', prefix: '+48', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', prefix: '+351', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar', prefix: '+974', flag: '🇶🇦' },
  { code: 'GB', name: 'Royaume-Uni', prefix: '+44', flag: '🇬🇧' },
  { code: 'RU', name: 'Russie', prefix: '+7', flag: '🇷🇺' },
  { code: 'SG', name: 'Singapour', prefix: '+65', flag: '🇸🇬' },
  { code: 'SE', name: 'Suède', prefix: '+46', flag: '🇸🇪' },
  { code: 'CH', name: 'Suisse', prefix: '+41', flag: '🇨🇭' },
  { code: 'TH', name: 'Thaïlande', prefix: '+66', flag: '🇹🇭' },
  { code: 'TN', name: 'Tunisie', prefix: '+216', flag: '🇹🇳' },
  { code: 'TR', name: 'Turquie', prefix: '+90', flag: '🇹🇷' },
  { code: 'UA', name: 'Ukraine', prefix: '+380', flag: '🇺🇦' },
  { code: 'VN', name: 'Vietnam', prefix: '+84', flag: '🇻🇳' }
].sort((a, b) => {
  // Convertit les préfixes en nombres pour le tri (enlève le '+' et convertit en nombre)
  const prefixA = parseInt(a.prefix.replace('+', ''))
  const prefixB = parseInt(b.prefix.replace('+', ''))
  return prefixA - prefixB
})

interface PhoneInputProps {
  onCountryChange?: (countryCode: string) => void
}

export default function PhoneInput({ onCountryChange }: PhoneInputProps) {
  const [phone, setPhone] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'FR') || countries[0])
  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validatePhoneNumber = (value: string) => {
    // Vérifie que le numéro contient exactement 10 chiffres
    return value.replace(/\D/g, '').length === 10
  }

  const formatPhoneNumber = (value: string) => {
    // Garde uniquement les chiffres
    const numbers = value.replace(/\D/g, '')
    
    // Limite à 10 chiffres
    const truncated = numbers.slice(0, 10)
    
    // Formate en groupes de 2 chiffres
    const formatted = truncated.replace(/(\d{2})(?=\d)/g, '$1 ')
    
    return formatted
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    setIsValid(validatePhoneNumber(formatted))
    if (!isTouched) setIsTouched(true)
  }

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.code === e.target.value)
    if (country) {
      setSelectedCountry(country)
      onCountryChange?.(country.code)
    }
  }

  return (
    <div>
      <label htmlFor="telephone" className="block text-sm font-light text-gray-600 mb-2">
        N° de téléphone
      </label>
      <div className="flex gap-2">
        <div className="relative">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            className="appearance-none w-[140px] px-4 py-2 pr-8 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow bg-white"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.prefix}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            {selectedCountry.prefix}
          </div>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={phone}
            onChange={handleChange}
            placeholder="6 95 21 60 70"
            className={`w-full pl-16 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-shadow ${
              !isValid && isTouched && phone.length > 0
                ? 'border-red-300 focus:ring-red-200'
                : isValid && phone.length > 0
                ? 'border-green-300 focus:ring-green-200'
                : 'border-gray-200 focus:ring-gray-200'
            }`}
            required
          />
          {isValid && phone.length > 0 && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
      {!isValid && isTouched && phone.length > 0 && (
        <p className="mt-1 text-xs text-red-500">
          Veuillez entrer un numéro de téléphone valide (10 chiffres)
        </p>
      )}
      {(!phone || phone.length === 0) && isTouched && (
        <p className="mt-1 text-xs text-red-500">
          Le numéro de téléphone est requis
        </p>
      )}
    </div>
  )
} 