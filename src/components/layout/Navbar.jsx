import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Dog,
  Cat,
} from 'lucide-react'
import { useCart } from '@/hooks/useCart.jsx'
import CartDrawer from './CartDrawer.jsx'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Perros', path: '/perros', icon: Dog, target: 'dog' },
  { name: 'Gatos', path: '/gatos', icon: Cat, target: 'cat' },
  { name: 'Alimentos', path: '/alimentos' },
  { name: 'Promociones', path: '/promociones' },
  { name: 'Marcas', path: '/marcas' },
  { name: 'Nosotros', path: '/nosotros' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isHomePage = location.pathname === '/'
  const navbarScrolled = isScrolled > 20 || isOpen || !isHomePage

  const navbarClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
    navbarScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
      : 'bg-transparent'
  }`

  const linkColor = navbarScrolled ? 'text-carbon' : 'text-cream'
  const iconColor = navbarScrolled ? 'text-carbon' : 'text-cream'
  const searchIconColor = navbarScrolled ? 'text-gray-400' : 'text-gray-300'

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container mx-auto px-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="PetBloom"
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML =
                      '<span class="text-2xl font-bold text-carbon">PetBloom</span>'
                  }}
                />
              </Link>
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-primary' : linkColor
                      } hover:text-primary`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="navbar-underline"
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${searchIconColor}`}
                  onClick={() => setSearchOpen(true)}
                />
                <input
                  type="search"
                  placeholder="Buscar alimentos, marcas..."
                  className={`w-[260px] pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-primary transition-colors text-sm ${
                    navbarScrolled
                      ? 'bg-gray-50 border-gray-200 text-carbon'
                      : 'bg-white/10 border-gray-500 text-cream placeholder-gray-400'
                  }`}
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                />
                {!searchOpen && !navbarScrolled && (
                  <motion.div
                    layoutId="search-results"
                    className="absolute top-full mt-2 w-full min-h-[200px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                    style={{ display: 'none' }}
                  />
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                aria-label={`Carrito (${totalItems} productos)`}
                className="relative p-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                <ShoppingCart className={`w-5 h-5 ${iconColor}`} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>

              <motion.a
                href="/perros"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`btn text-sm ${navbarScrolled ? 'btn-primary' : 'btn-outline border-white text-cream hover:bg-white/10'}`}
              >
                Comprar ahora
              </motion.a>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center justify-between h-14">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="PetBloom"
                className="h-7 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML =
                    '<span class="text-xl font-bold text-carbon">PetBloom</span>'
                }}
              />
            </Link>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                aria-label={`Carrito (${totalItems} productos)`}
                className={`relative p-2 rounded-full transition-colors ${navbarScrolled ? 'hover:bg-gray-50' : 'hover:bg-white/10'}`}
              >
                <ShoppingCart className={`w-5 h-5 ${iconColor}`} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                    {totalItems}
                  </span>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                className={`p-2 rounded-full transition-colors ${navbarScrolled ? 'hover:bg-gray-50' : 'hover:bg-white/10'}`}
              >
                {isOpen ? (
                  <X className={`w-5 h-5 ${iconColor}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${iconColor}`} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'text-primary bg-primary/5'
                            : 'text-carbon hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.icon && <link.icon className="w-5 h-5" />}
                      {link.name}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                    Buscar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer when mobile menu is open */}
      {isOpen && <div className="lg:hidden h-0" />}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
