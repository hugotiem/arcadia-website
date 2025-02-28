'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 font-minion-pro">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">
          Nous nous excusons pour ce désagrément. Notre équipe a été notifiée.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
} 