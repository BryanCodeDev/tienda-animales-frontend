import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Tag, Gift, Truck } from 'lucide-react'
import Badge from '@ui/Badge.jsx'
import { formatPrice } from '@/utils/seo.js'
import { useSEO } from '@/utils/seo.js'
import products from '@data/products.js'
import { saleProducts } from '@data/products.js'

const promoSections = [
  {
    id: 'discounts',
    title: 'Descuentos especiales',
    description: 'Hasta 16% de descuento en productos seleccionados.',
    icon: Tag,
    color: 'text-primary',
    bg: 'bg-primary/5',
    products: saleProducts,
  },
  {
    id: 'combos',
    title: 'Combos exclusivos',
    description: 'Lleva 2 y paga 1 en snacks seleccionados.',
    icon: Gift,
    color: 'text-natural',
    bg: 'bg-natural/5',
    products: products.slice(0, 4),
  },
  {
    id: 'shipping',
    title: 'Envío gratis',
    description: 'A partir de $100.000 COP. Válido temporalmente.',
    icon: Truck,
    color: 'text-secondary',
    bg: 'bg-secondary/5',
    products: products.slice(2, 6),
  },
]

export default function Promotions() {
  useSEO({
    title: 'Promociones y ofertas',
    description:
      'Descubre nuestras promociones especiales, combos y ofertas en alimentos para perros y gatos.',
    canonical: '/promociones',
  })

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-md sm:text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Promociones
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Consentirlos también puede ser una buena decisión. Aprovechá
            nuestras ofertas especiales este mes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {promoSections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`p-6 rounded-3xl ${section.bg}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-6 h-6 ${section.color}`} />
                  <h2 className="text-display-sm font-bold text-carbon">
                    {section.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {section.description}
                </p>
                <Badge variant="primary" size="sm">
                  Demo
                </Badge>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-display-md font-bold text-carbon">
            Productos en oferta
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {saleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
            >
              <Link to={`/producto/${product.slug}`} className="block group">
                <div className="card h-full overflow-hidden">
                  <div className="relative h-48 bg-gray-50 overflow-hidden">
                    <Badge
                      variant="primary"
                      size="sm"
                      className="absolute top-4 left-4 z-10"
                    >
                      -{product.discount}%
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="neutral" size="sm" className="mb-2">
                      {product.brand}
                    </Badge>
                    <h3 className="font-bold text-carbon text-sm mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-carbon">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
