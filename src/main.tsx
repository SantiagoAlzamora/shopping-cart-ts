import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './context/filtersContext.tsx'
import { CartProvider } from './context/cartContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>,
)
