import './cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { IProduct } from '../types/product.type.js'
import { ICartItem } from '../types/cart.type.js'

interface CartItemProps{

  product:IProduct,
  quantity:number,
  addToCart:(product : IProduct) =>(void),
}

function CartItem ({ product, quantity, addToCart } : CartItemProps) {
  
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={() => addToCart(product)}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart?.map((item : ICartItem) => (
            <CartItem
              key={item.product.id}
              addToCart={() => addToCart(item.product)}
              {...item}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}