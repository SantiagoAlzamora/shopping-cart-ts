import { useCart } from "../hooks/useCart"
import { IProduct } from "../types/product.type"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import "./products.css"

interface ProductsProps {
  products: IProduct[]
}

export default function Products({ products }: ProductsProps) {

  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product : IProduct) => {
    return cart?.some(item => item.product.id === product.id)
  }


  return (
    <main className="products">
      <ul>
        {
          products.map(product => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.description} />
                <div><strong>{product.title}</strong> - ${product.price}</div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
