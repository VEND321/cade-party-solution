import React from 'react'
import { useCart } from '../hooks/useCart'
import { WHATSAPP_NUMBER } from '../config'

const WhatsAppButton = ({ itemCount, className = '', id }) => {
  const { cart } = useCart()

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      return "Hello Cade Party Solution, I'm interested in your rental items. Please share availability details."
    }
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    let message = "Hello Cade Party Solution, I'd like to place an order:\n"
    message += `\nItems (${totalItems}):\n\n`
    cart.forEach(item => {
      message += `• ${item.name} - ${item.quantity} x ₦${item.price.toLocaleString()} = ₦${(item.quantity * item.price).toLocaleString()}\n`
    })
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    message += `\nTOTAL: ₦${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    return message
  }

  const handleClick = () => {
    const message = generateWhatsAppMessage()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button 
      className={`inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-green-600 relative ${itemCount > 0 ? 'animate-pulse shadow-lg' : ''} ${className}`}
      id={id}
      onClick={handleClick}
    >
      <i className="fab fa-whatsapp text-lg"></i>
      <span>Order on WhatsApp</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
          {itemCount}
        </span>
      )}
    </button>
  )
}

export default WhatsAppButton