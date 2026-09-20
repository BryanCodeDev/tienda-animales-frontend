import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, ShoppingBag } from 'lucide-react'
import Button from '@ui/Button.jsx'
import IMAGES from '@data/images.js'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 bg-cream overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-natural/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-display-2xl md:text-display-2xl font-bold text-carbon leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Alimentación premium <br />
              para <span className="text-primary">tu mejor amigo</span>.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Encuentra alimentos y opciones de nutrición pensadas para cada
              etapa de la vida de tu perro o gato.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/alimentos">
                <Button variant="primary" size="lg" icon={ShoppingBag}>
                  Ver alimentos
                </Button>
              </Link>
              <Link to="/perros">
                <Button variant="outline" size="lg" icon={ChevronRight}>
                  Para perros
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={IMAGES.hero.dogAndCat}
                alt="Perro y gato felices"
                className="w-full h-auto object-cover"
                loading="eager"
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
