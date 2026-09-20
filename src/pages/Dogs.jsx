import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ProductGrid from '@components/sections/ProductGrid.jsx'
import CategoryCard from '@components/sections/CategoryCard.jsx'
import { dogProducts, featuredProducts } from '@data/products.js'
import categories from '@data/categories.js'
import { useSEO } from '@/utils/seo.js'
import { useToast } from '@components/layout/Toast.jsx'

export default function Dogs() {
  const { addToast } = useToast()

  useSEO({
    title: 'Alimentación para perros',
    description:
      'Encuentra alimentos premium para perros de todas las razas y edades. Croquetas, snacks y nutrición especializada para tu mejor amigo.',
    canonical: '/perros',
  })

  const dogCategories = categories.filter((c) =>
    ['alimento-seco', 'alimento-humedo', 'snacks-y-premios', 'cachorros', 'adultos', 'senior', 'dietas-especiales'].includes(c.slug)
  )

  const handleAddToCart = (product) => {
    addToast({
      type: 'success',
      title: 'Producto agregado',
      message: `${product.name} se ha agregado al carrito.`,
    })
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Alimentación para perros
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nutrición premium para cada etapa de la vida de tu perro.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md font-bold text-carbon mb-8">
            Categorías para perros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dogCategories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        <ProductGrid
          title="Productos destacados para perros"
          subtitle="Los favoritos de nuestros peludos perrunos."
          products={dogProducts}
          columns={4}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  )
}
