import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { useState } from 'react'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <>
      <Header changeFilters={setFilters}></Header>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}

export default App
