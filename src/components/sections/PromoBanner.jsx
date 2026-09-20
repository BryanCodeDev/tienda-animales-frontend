import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const promos = [
  {
    id: 'promo-1',
    title: 'Hasta 15% OFF',
    description: 'Productos seleccionados. Oferta demo - datos pendientes de aprobación.',
    color: 'from-primary to-orange-400',
    href: '/promociones',
    label: 'Oferta Demo',
  },
  {
    id: 'promo-2',
    title: '2x1 Snacks',
    description: 'Lleva 2 y paga 1 en snacks seleccionados.',
    color: 'from-natural to-green-400',
    href: '/promociones',
    label: 'Combo Demo',
  },
  {
    id: 'promo-3',
    title: 'Envío gratis',
    description: 'A partir de $100.000 COP. Válido temporalmente.',
    color: 'from-secondary to-yellow-300',
    href: '/promociones',
    label: 'Envío Demo',
  },
]

export default function PromoBanner() {
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
            Consentirlos también puede ser una buena decisión.
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Aprovechá nuestras promociones especiales este mes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {promos.map((promo) => (
            <motion.div
              key={promo.id}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Link to={promo.href} className="block group">
                <motion.div
                  className={`relative rounded-3xl overflow-hidden shadow-xl h-64 flex items-center justify-center text-center p-6 bg-gradient-to-br ${promo.color} group-hover:shadow-2xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <span className="px-3 py-1 bg-white/20 text-xs font-medium rounded-full mb-3 inline-block">
                      {promo.label}
                    </span>
                    <h3 className="text-2xl font-bold text-carbon mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-sm text-carbon/80">
                      {promo.description}
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
