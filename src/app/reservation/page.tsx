'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Navigation from '@/components/Navigation'
import PhoneInput from '@/components/PhoneInput'
import CountrySelect from '@/components/CountrySelect'
import EmailInput from '@/components/EmailInput'
import Image from 'next/image'

export default function Reservation() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    date: '',
    message: '',
    pays: ''
  })
  const [touched, setTouched] = useState({
    prenom: false,
    nom: false,
    date: false
  })
  const [dateError, setDateError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateDate = (date: string) => {
    if (!date) return "La date de départ est requise"
    
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      return "La date de départ doit être dans le futur"
    }
    
    return ""
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'date') {
      setDateError(validateDate(value))
    }
  }

  const handleCountryChange = (countryCode: string) => {
    setFormData(prev => ({
      ...prev,
      pays: countryCode
    }))
  }

  const handleBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }))

    if (field === 'date') {
      setDateError(validateDate(formData.date))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched({
      prenom: true,
      nom: true,
      date: true
    })

    const dateValidationError = validateDate(formData.date)
    setDateError(dateValidationError)

    if (dateValidationError) {
      return
    }

    setIsSubmitted(true)
    // ... logique de soumission
  }

  const today = new Date().toISOString().split('T')[0]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="animate-[fadeInDown_1s_ease-out_forwards] opacity-0">
              <svg 
                className="w-16 h-16 mx-auto text-green-500 mb-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h2 className="text-3xl font-light mb-6">Merci !</h2>
              <p className="text-gray-600">
                Votre demande a bien été prise en compte pour un voyage à bord le{' '}
                <span className="font-medium">{formatDate(formData.date)}</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Introduction Section */}
      <section className="pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
            Une Expérience Maritime d&apos;Exception
          </h1>
          <p className="text-gray-600 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] text-sm md:text-base">
            Dans la noble tradition des grands navigateurs, notre ketch sillonne avec grâce
            les eaux méditerranéennes. Façonné dans les essences les plus précieuses, il perpétue
            l&apos;excellence maritime française. De la Riviera aux rivages d&apos;Orient, notre équipage cultive
            l&apos;art subtil du voyage en mer, où chaque instant s&apos;écoule avec la délicatesse d&apos;un sablier
            d&apos;argent.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Navigation Journalière */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/01.jpg"
                alt="Navigation Journalière"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center cursor-pointer p-8">
              <div className="flex flex-row items-center gap-8">
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Navigation Journalière
                </h2>
                
                <div className="flex-1">
                  <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                    <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                      Une parenthèse rare s&apos;ouvre à quatre privilégiés. Le temps
                      d&apos;une journée, notre équipage perpétue la grande tradition
                      maritime, entre élégance du service et raffinement des instants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">01</span>
              </div>
            </div>
          </div>

          {/* Réceptions Distinguées */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/02.jpg"
                alt="Réceptions Distinguées"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center cursor-pointer p-8">
              <div className="flex flex-row items-center gap-8">
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Réceptions Distinguées
                </h2>
                
                <div className="flex-1">
                  <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                    <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                      Dans l&apos;intimité de dix convives,
                      notre navire devient l&apos;écrin de
                      vos célébrations les plus délicates.
                      Un cadre d&apos;exception pour des
                      moments choisis, où discrétion
                      et excellence se marient
                      naturellement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">02</span>
              </div>
            </div>
          </div>

          {/* Croisières Hebdomadaires */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/03.jpg"
                alt="Croisières Hebdomadaires"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center cursor-pointer p-8">
              <div className="flex flex-row items-center gap-8">
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Croisières Hebdomadaires
                </h2>
                
                <div className="flex-1">
                  <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                    <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                      Une semaine d&apos;exception où le temps
                      se suspend entre ciel et mer. Nos
                      escales soigneusement sélectionnées
                      vous font découvrir les plus beaux
                      mouillages de Méditerranée.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">03</span>
              </div>
            </div>
          </div>

          {/* Expériences Personnalisées */}
          <div className="group relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/04.jpg"
                alt="Expériences Personnalisées"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center cursor-pointer p-8">
              <div className="flex flex-row items-center gap-8">
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Expériences Personnalisées
                </h2>
                
                <div className="flex-1">
                  <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                    <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                      Votre rêve maritime prend vie selon
                      vos désirs. Notre équipage met son
                      expertise à votre service pour créer
                      une expérience unique, à votre image.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-6">Réservation</h2>
            <p className="text-gray-600">
              Vous souhaitez rejoindre l&apos;Arcadia ? Écrivez nous et planifions ensemble votre navigation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-light text-gray-600 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  onBlur={() => handleBlur('prenom')}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-shadow ${
                    !formData.prenom && touched.prenom
                      ? 'border-red-300 focus:ring-red-200'
                      : formData.prenom
                      ? 'border-green-300 focus:ring-green-200'
                      : 'border-gray-200 focus:ring-gray-200'
                  }`}
                  required
                />
                {!formData.prenom && touched.prenom && (
                  <p className="mt-1 text-xs text-red-500">
                    Le prénom est requis
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-light text-gray-600 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  onBlur={() => handleBlur('nom')}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-shadow ${
                    !formData.nom && touched.nom
                      ? 'border-red-300 focus:ring-red-200'
                      : formData.nom
                      ? 'border-green-300 focus:ring-green-200'
                      : 'border-gray-200 focus:ring-gray-200'
                  }`}
                  required
                />
                {!formData.nom && touched.nom && (
                  <p className="mt-1 text-xs text-red-500">
                    Le nom est requis
                  </p>
                )}
              </div>
            </div>

            {/* Téléphone et Pays */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PhoneInput onCountryChange={handleCountryChange} />
              <CountrySelect value={formData.pays} onChange={handleCountryChange} />
            </div>

            {/* Email */}
            <EmailInput />

            {/* Date de départ */}
            <div>
              <label htmlFor="date" className="block text-sm font-light text-gray-600 mb-2">
                Quand souhaitez vous partir ?
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                onBlur={() => handleBlur('date')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-shadow ${
                  dateError && touched.date
                    ? 'border-red-300 focus:ring-red-200'
                    : formData.date && !dateError
                    ? 'border-green-300 focus:ring-green-200'
                    : 'border-gray-200 focus:ring-gray-200'
                }`}
                required
              />
              {touched.date && dateError && (
                <p className="mt-1 text-xs text-red-500">
                  {dateError}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
                Message additionel
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
} 