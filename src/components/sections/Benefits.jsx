import { motion } from 'framer-motion'
import { Truck, CreditCard, Clock, Heart, Shield, Award } from 'lucide-react'

const benefits = [
  {
    id: 'easy',
    title: 'Compra fácil',
    description: 'Proceso simple y rápido. Encuentra y adquiere lo que necesitas en pocos clics.',
    icon: Clock,
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    id: 'options',
    title: 'Opciones para perros y gatos',
    description: 'Selección curada para cada etapa y necesidad de tu mascota.',
    icon: Heart,
    color: 'bg-natural/10',
    iconColor: 'text-natural',
  },
  {
    id: 'brands',
    title: 'Marcas seleccionadas',
    description: 'Trabajamos con las marcas líderes en nutrición animal.',
    icon: Award,
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    id: 'support',
    title: 'Atención personalizada',
    description: 'Asesoría dedicada para encontrar lo ideal para tu compañero.',
    icon: Shield,
    color: 'bg-carbon/10',
    iconColor: 'text-carbon',
  },
]

export default function Benefits() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            Comprar para ellos debería ser fácil.
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nos complicamos con los detalles para que tú no tengas que hacerlo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.id}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="card p-8 text-center group"
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-carbon mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
