import { motion } from 'framer-motion'
import ProductGrid from '@components/sections/ProductGrid.jsx'
import CategoryCard from '@components/sections/CategoryCard.jsx'
import { catProducts } from '@data/products.js'
import categories from '@data/categories.js'
import { useSEO } from '@/utils/seo.js'
import { useToast } from '@components/layout/Toast.jsx'

export default function Cats() {
  const { addToast } = useToast()

  useSEO({
    title: 'Alimentación para gatos',
    description:
      'Alimentos premium para gatos de todas las edades. Croquetas, comida húmeda y snacks saludables para tu minino feliz.',
    canonical: '/gatos',
  })

  const catCategories = categories.filter((c) =>
    ['alimento-seco', 'alimento-humedo', 'alimentos-naturales', 'snacks-y-premios', 'cachorros', 'adultos', 'senior', 'dietas-especiales'].includes(c.slug)
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-md sm:text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Alimentación para gatos
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nutrición premium para cada etapa de la vida de tu gato.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md font-bold text-carbon mb-8">
            Categorías para gatos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catCategories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </motion.div>

        <ProductGrid
          title="Productos destacados para gatos"
          subtitle="Los favoritos de nuestros mininos."
          products={catProducts}
          columns={4}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  )
}
