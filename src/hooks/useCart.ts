import { useContext } from 'react'
import { CartContext } from '../context/cartContext.tsx'


export const useCart = () => {
  const context = useContext(CartContext)
  console.log(context);
  

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}