import { Products } from './components/Products.jsx'
import { products } from './mocks/products.json'
import './App.css'

function App() {
  return (
    <>
      <Products products={products}></Products>
    </>
  )
}

export default App
