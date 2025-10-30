import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((item) => {
    console.log('🛒 Adding to cart:', item)
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name)
      if (existingItem) {
        console.log('📦 Item exists, updating quantity:', item.name, 'from', existingItem.quantity, 'to', existingItem.quantity + item.quantity)
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }
      console.log('🆕 New item added to cart:', item.name, 'quantity:', item.quantity)
      return [...prevCart, item]
    })
  }, [])

  const removeFromCart = useCallback((itemName) => {
    console.log('🗑️ Removing from cart:', itemName)
    setCart(prevCart => prevCart.filter(item => item.name !== itemName))
  }, [])

  const updateQuantity = useCallback((itemName, newQuantity) => {
    console.log('📊 Updating quantity:', itemName, 'to', newQuantity)
    if (newQuantity < 1) {
      console.log('❌ Quantity less than 1, removing item:', itemName)
      removeFromCart(itemName)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    console.log('🧹 Clearing entire cart')
    setCart([])
  }, [])

  const getTotalItems = useCallback(() => {
    const total = cart.reduce((total, item) => total + item.quantity, 0)
    console.log('📦 Total items in cart:', total)
    return total
  }, [cart])

  const getTotalPrice = useCallback(() => {
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    console.log('💰 Total price in cart:', total)
    return total
  }, [cart])

  // Log cart changes
  React.useEffect(() => {
    console.log('🛒 Cart updated:', cart)
  }, [cart])

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}