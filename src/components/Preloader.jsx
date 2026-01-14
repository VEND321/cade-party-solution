import React, { useEffect, useState } from 'react'

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const duration = 3000
    const interval = 30
    const step = 100 / (duration / interval)
    const id = setInterval(() => {
      setProgress(prev => {
        const next = prev + step
        return next >= 100 ? 100 : next
      })
    }, interval)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-orange-200 flex items-center justify-center z-50 transition-opacity duration-800">
      <div className="flex flex-col items-center gap-8 max-w-md w-11/12 p-8 text-center">
        <div className="w-32 h-32 animate-bounce">
          <img 
            src="src/assets/cade-party-solution-logo.jpg" 
            alt="Cade Party Solution Logo" 
            className="w-full h-full object-contain rounded-full shadow-lg"
          />
        </div>
        
        <div className="w-full">
          <div className="h-2 bg-orange-100 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-orange-500 rounded-full transition-all duration-300" style={{ width: `${Math.round(progress)}%` }}></div>
          </div>
          <div className="text-right text-orange-600 font-semibold text-lg">{Math.round(progress)}%</div>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-orange-700">
          <span className="text-xl font-medium">Preparing your premium rentals...</span>
          <div className="flex gap-1">
            <span className="animate-pulse opacity-20 text-3xl">.</span>
            <span className="animate-pulse opacity-20 text-3xl animation-delay-200">.</span>
            <span className="animate-pulse opacity-20 text-3xl animation-delay-400">.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader