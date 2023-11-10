import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}

export default App
