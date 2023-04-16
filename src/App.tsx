import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import  Contact  from './pages/Contact'
import { Layout } from './components/Layout'
import './App.css'
import { ProductPage } from './pages/Product'



function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

  </>
  )
}

export default App
