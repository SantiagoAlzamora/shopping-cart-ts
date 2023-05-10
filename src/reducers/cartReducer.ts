import { Action, ICartItem } from "../types/cart.type"

const storage = localStorage.getItem('cart')

export const cartInitialState: ICartItem[] = storage ? JSON.parse(storage) : []

// update localStorage with state for cart
export const updateLocalStorage = (state: ICartItem[]) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: Array<ICartItem>, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      
      const productToAdd = action.payload
      const productInCartIndex = state.findIndex(({ product }) => product.id === productToAdd.id)

      if (productInCartIndex >= 0) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]

        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          product: { ...productToAdd }, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    // action.payload es el contenido con el que voy a modificar al estado actual (aca es una tarea)
    case "REMOVE_FROM_CART": {
      const { id } = action.payload
      const newState = state.filter(({ product }) => product.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case "CLEAR_CART":
      updateLocalStorage([])
      return []
    default:
      return state
  }
}