import { createContext, useReducer} from 'react'
import { Action, ICartItem, ICartItemContext } from '../types/cart.type';
import { cartInitialState, cartReducer } from '../reducers/cartReducer';
import { IProduct } from '../types/product.type';

export const CartContext = createContext<ICartItemContext>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
});

function useCartReducer () {
  const [state, dispatch]:[ICartItem[],React.Dispatch<Action>] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product:IProduct) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product:IProduct) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { cart : state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }: { children: JSX.Element }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}