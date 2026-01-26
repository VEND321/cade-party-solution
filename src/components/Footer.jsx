import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <img 
            src="src/assets/cade-party-solution-logo.jpg" 
            alt="Cade Party Solution Logo" 
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="font-playfair text-2xl font-bold text-white mb-2">
              Cade Party Solution
            </h1>
            <p className="text-orange-100">
              Premium Event Rentals — Delivered with Excellence
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#categories" className="text-orange-100 hover:text-white transition-colors">Our Rentals</a>
          <a href="#how-it-works" className="text-orange-100 hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="text-orange-100 hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="text-orange-100 hover:text-white transition-colors">Contact</a>
          <a href="#terms" className="text-orange-100 hover:text-white transition-colors">Terms</a>
        </div>

        <p className="text-orange-200 text-sm mb-2">
          © {new Date().getFullYear()} By Cade Party Solution. All rights reserved.
        </p>
        <p className="text-orange-200 text-sm mb-4">
          Catalogue prices are subject to change — confirm availability via WhatsApp.
        </p>

        <p className="text-orange-300 text-xs">
          Created by{' '}
          <a 
            href="https://api.whatsapp.com/send?phone=2348135770477&text=Hi%20Vend!%20I%20saw%20your%20work%20on%20Cade%20Party%20Solution%20and%20I%E2%80%99m%20interested%20in%20getting%20a%20website." 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-100 underline"
          >
            Vend 💻
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer