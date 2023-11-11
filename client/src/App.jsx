import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart.jsx'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters.js'
import { useState } from 'react'
import './App.css'
import { CartProvider } from './context/cart.jsx'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
