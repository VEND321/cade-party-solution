import React from 'react'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import WhatsAppButton from './WhatsAppButton'
import logo from '../assets/cade-party-solution-logo.jpg'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Cade Party Solution Logo" 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
          <div className="hidden md:block">
            <h1 className="font-playfair text-xl font-bold text-orange-700">
              Event Rentals
            </h1>
            <p className="text-gray-600 text-sm">
              Premium Rentals — by Cade Party Solution
            </p>
          </div>
        </div>
        
        <button 
          className="md:hidden text-orange-600 text-xl p-2"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <div className="hidden md:block">
          <WhatsAppButton itemCount={getTotalItems()} />
        </div>
      </div>
      
      <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-3 flex flex-col">
          <a href="#categories" className="py-3 border-b border-gray-100 text-gray-700 hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
            Our Rentals
          </a>
          <a href="#how-it-works" className="py-3 border-b border-gray-100 text-gray-700 hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
            How It Works
          </a>
          <a href="#faq" className="py-3 border-b border-gray-100 text-gray-700 hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
            FAQ
          </a>
          <a href="#contact" className="py-3 border-b border-gray-100 text-gray-700 hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
            Contact
          </a>
          <a href="#terms" className="py-3 text-gray-700 hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
            Terms
          </a>
          <div className="py-3 border-t border-gray-100 mt-2">
            <WhatsAppButton itemCount={getTotalItems()} />
          </div>
        </div>
      </nav>
      {/* Floating small WhatsApp button with item count badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppButton itemCount={getTotalItems()} size="sm" showLabel={false} />
      </div>
    </header>
  )
}

export default Header