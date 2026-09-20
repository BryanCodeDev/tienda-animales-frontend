import { motion } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({
  products = [],
  title,
  subtitle,
  onAddToCart,
  columns = 4,
}) {
  if (!products || products.length === 0) {
    return null
  }

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          className={`grid ${columnClasses[columns]} gap-6 md:gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
