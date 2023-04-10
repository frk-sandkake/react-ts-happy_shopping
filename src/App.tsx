import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import './App.css'
import ProductDetails from './pages/ProductDetails'



function App() {
  return (
  <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Container>
  </>
  )
}

export default App
