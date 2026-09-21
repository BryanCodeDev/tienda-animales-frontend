import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Dog, Cat } from 'lucide-react'
import IMAGES from '@data/images'

const dogStages = [
  {
    id: 'puppy',
    title: 'Cachorros',
    description: 'Fórmulas para un crecimiento saludable',
    image: IMAGES.nutrition.puppy,
    href: '/alimentos?etapa=cachorro',
  },
  {
    id: 'adult',
    title: 'Adultos',
    description: 'Nutrición equilibrada para toda la vida',
    image: IMAGES.nutrition.adult,
    href: '/alimentos?etapa=adulto',
  },
  {
    id: 'senior',
    title: 'Senior',
    description: 'Cuidado con atención a las etapas avanzadas',
    image: IMAGES.nutrition.senior,
    href: '/alimentos?etapa=senior',
  },
  {
    id: 'small-breed',
    title: 'Razas pequeñas',
    description: 'Precisión nutricional para pequeños amigos',
    image: IMAGES.nutrition.smallBreed,
    href: '/alimentos?raza=pequena',
  },
  {
    id: 'large-breed',
    title: 'Razas grandes',
    description: 'Soporte para huesos y articulaciones',
    image: IMAGES.nutrition.largeBreed,
    href: '/alimentos?raza=grande',
  },
]

const catStages = [
  {
    id: 'kitten',
    title: 'Cachorros',
    description: 'Desarrollo cognitivo óptimo',
    image: IMAGES.nutrition.puppy,
    href: '/alimentos?etapa=cachorro',
  },
  {
    id: 'adult-cat',
    title: 'Adultos',
    description: 'Salud y energía diaria',
    image: IMAGES.nutrition.adult,
    href: '/alimentos?etapa=adulto',
  },
  {
    id: 'senior-cat',
    title: 'Senior',
    description: 'Cuidado para los años dorados',
    image: IMAGES.nutrition.senior,
    href: '/alimentos?etapa=senior',
  },
  {
    id: 'sterilized',
    title: 'Esterilizados',
    description: 'Formulación especializada',
    image: IMAGES.nutrition.sterilized,
    href: '/alimentos?tipo=esterilizado',
  },
]

export default function NutritionSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            Cada mascota tiene una historia diferente.
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nuestras fórmulas están pensadas para cada etapa de la vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dogs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Dog className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-carbon">Perros</h3>
            </div>
            <div className="space-y-4">
              {dogStages.map((stage, index) => (
                <NutritionCard
                  key={stage.id}
                  stage={stage}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Cats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Cat className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-carbon">Gatos</h3>
            </div>
            <div className="space-y-4">
              {catStages.map((stage, index) => (
                <NutritionCard
                  key={stage.id}
                  stage={stage}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function NutritionCard({ stage, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-4 group"
    >
      <Link to={stage.href} className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={stage.image}
            alt={stage.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-carbon">{stage.title}</h4>
          <p className="text-sm text-gray-500">{stage.description}</p>
        </div>
        <motion.div
          className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 3 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
