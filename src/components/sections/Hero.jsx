import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, ChevronRight } from 'lucide-react'
import Button from '@ui/Button'
import IMAGES from '@data/images'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center bg-carbon text-cream overflow-hidden">
      <div className="absolute inset-0">
        {!imageError && (
          <>
            <img
              src={IMAGES.hero.dogAndCat}
              alt="Perro y gato felices"
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-carbon/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-carbon/30 to-transparent" />
          </>
        )}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-carbon to-natural/20" />
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-2xl">
          <motion.h1
            className="text-display-md sm:text-display-xl md:text-display-2xl font-bold text-cream leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Alimentación premium <br />
            para <span className="text-primary">tu mejor amigo</span>.
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Encuentra alimentos y opciones de nutrición pensadas para cada
            etapa de la vida de tu perro o gato.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
        </div>
      </div>
    </section>
  )
}
