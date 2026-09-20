import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './hooks/useCart.jsx'
import { ToastProvider } from './components/layout/Toast.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppButton from './components/layout/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Dogs from './pages/Dogs.jsx'
import Cats from './pages/Cats.jsx'
import Foods from './pages/Foods.jsx'
import Promotions from './pages/Promotions.jsx'
import Brands from './pages/Brands.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: location.pathname === '/' ? 'smooth' : 'auto',
    })
  }, [location.pathname])

  return (
    <CartProvider>
      <ToastProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perros" element={<Dogs />} />
            <Route path="/gatos" element={<Cats />} />
            <Route path="/alimentos" element={<Foods />} />
            <Route path="/promociones" element={<Promotions />} />
            <Route path="/marcas" element={<Brands />} />
            <Route path="/producto/:slug" element={<Product />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacidad" element={<Faq />} />
            <Route path="/terminos" element={<Faq />} />
            <Route path="/devoluciones" element={<Faq />} />
            <Route path="/envios" element={<Faq />} />
            <Route path="/datos" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </ToastProvider>
    </CartProvider>
  )
}

export default App
