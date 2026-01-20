import React from 'react'
import { useCart } from '../hooks/cartContext'
import { WHATSAPP_NUMBER } from '../config'

const WhatsAppButton = ({ itemCount, className = '', id, size = 'md', showLabel = true }) => {
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

  const base = 'inline-flex items-center gap-2 bg-green-500 text-white font-medium transition-all hover:bg-green-600 relative'
  const sizeClasses = size === 'sm' ? 'w-12 h-12 rounded-full justify-center' : 'px-6 py-3 rounded-lg'
  const pulseShadow = itemCount > 0 ? 'animate-pulse shadow-lg' : ''
  const buttonClass = `${base} ${sizeClasses} ${pulseShadow} ${className}`

  return (
    <button 
      className={buttonClass}
      id={id}
      onClick={handleClick}
      aria-label={showLabel ? 'Order on WhatsApp' : 'Open WhatsApp to place order'}
    >
      <i className={`fab fa-whatsapp ${size === 'sm' ? 'text-xl' : 'text-lg'}`}></i>
      {showLabel && <span>Order on WhatsApp</span>}
      {itemCount > 0 && (
        <span className={`absolute ${size === 'sm' ? '-top-1 -right-1 w-5 h-5 text-[10px]' : '-top-2 -right-2 w-6 h-6 text-xs'} bg-red-500 text-white rounded-full flex items-center justify-center font-bold animate-bounce`}>
          {itemCount}
        </span>
      )}
    </button>
  )
}

export default WhatsAppButton
