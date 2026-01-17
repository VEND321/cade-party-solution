import React, { useState, useEffect } from 'react'

const ItemCard = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Debug logs for image
  console.log('🖼️ ItemCard rendered:', item.name)
  console.log('🖼️ Image path:', item.image)
  console.log('🖼️ Image type:', typeof item.image)

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log('➕ Adding to cart from ItemCard:', item.name, 'quantity:', quantity)
    onAddToCart({
      name: item.name,
      price: item.price,
      quantity: quantity
    })
    setQuantity(1)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isModalOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isModalOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {(item.premium || item.vip) && (
        <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
          {item.vip ? 'VIP' : 'Premium'}
        </div>
      )}
      
      {/* Image container with click to open modal */}
      <button
        type="button"
        className="h-64 bg-gray-100 flex items-center justify-center p-4 overflow-hidden w-full cursor-zoom-in"
        onClick={openModal}
        aria-label={`View ${item.name} image`}
      >
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          loading="lazy" 
          onError={(e) => {
            console.error('❌ Image failed to load:', item.image)
            console.error('❌ Image error details:', e)
            e.target.style.display = 'none'
          }}
          onLoad={() => {
            console.log('✅ Image loaded successfully:', item.image)
          }}
        />
      </button>

      {/* Lightbox Modal - full-screen cover */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.name} image preview`}
          onClick={closeModal}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-800 shadow hover:bg-white"
            onClick={(e) => { e.stopPropagation(); closeModal() }}
          >
            ✕
          </button>
          <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </div>
      )}
      
      <div className="p-5">
        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {item.name}
        </h3>
        
        <div className="mb-4">
          <p className="text-orange-600 font-bold text-xl">
            ₦{item.price.toLocaleString()} 
            <span className="text-gray-600 text-sm ml-1">{item.unit}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <button 
            className="w-8 h-8 bg-gray-100 border-none rounded-full cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-200 text-gray-600"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <input 
            type="number" 
            min="1" 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-12 text-center py-1 border border-gray-300 rounded text-gray-700"
          />
          <button 
            className="w-8 h-8 bg-gray-100 border-none rounded-full cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-200 text-gray-600"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        
        <button 
          className="w-full py-3 bg-orange-500 text-white border-none rounded-lg cursor-pointer transition-colors font-medium hover:bg-orange-600"
          onClick={handleAddToCart}
        >
          Add to Order
        </button>
      </div>
    </div>
  )
}

export default ItemCard
