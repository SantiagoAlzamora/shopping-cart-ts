import { IProduct } from "./product.type";

export interface ICartItem{
  product:IProduct,
  quantity:number
}

export interface ICartItemContext {
  cart: ICartItem[],
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
  clearCart: () => void
}

interface AddToCartAction{
  type : "ADD_TO_CART",
  payload:IProduct
}
interface RemoveFromCartAction{
  type : "REMOVE_FROM_CART",
  payload:IProduct
}
interface ClearCartAction{
  type : "CLEAR_CART",
}

export type Action = AddToCartAction | RemoveFromCartAction | ClearCartAction