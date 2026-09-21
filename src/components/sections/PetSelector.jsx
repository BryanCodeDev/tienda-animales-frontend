import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Dog, Cat } from 'lucide-react'
import Button from '@ui/Button'
import IMAGES from '@data/images'
import { useState } from 'react'

const petOptions = [
  {
    id: 'dog',
    name: 'Perro',
    title: 'PARA MI PERRO',
    description: 'Alimentos, snacks y opciones para cada etapa.',
    href: '/perros',
    image: IMAGES.petSelector.dog,
    icon: Dog,
  },
  {
    id: 'cat',
    name: 'Gato',
    title: 'PARA MI GATO',
    description: 'Nutrición pensada para sus necesidades.',
    href: '/gatos',
    image: IMAGES.petSelector.cat,
    icon: Cat,
  },
]

export default function PetSelector() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            ¿Para quién estamos buscando?
          </h2>
          <p className="text-gray-500 mt-4">
            Encuentra lo mejor para tu compañero peludo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {petOptions.map((pet, index) => {
            const Icon = pet.icon
            const [imageError, setImageError] = useState(false)
            return (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <Link to={pet.href} className="block">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden h-80 shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    {!imageError && (
                      <img
                        src={pet.image}
                        alt={`Alimentos para ${pet.name.toLowerCase()}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                      />
                    )}
                    {imageError && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-natural/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <Icon className="w-20 h-20" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{pet.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{pet.description}</p>
                      <motion.div
                        className="inline-flex items-center gap-2 text-primary bg-cream px-4 py-2 rounded-full font-medium transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Ver alimentos <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
