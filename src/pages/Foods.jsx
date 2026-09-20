import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '@components/sections/ProductGrid.jsx'
import products from '@data/products.js'
import { useSEO } from '@/utils/seo.js'
import { useToast } from '@components/layout/Toast.jsx'

export default function Foods() {
  const [searchParams] = useSearchParams()
  const { addToast } = useToast()
  const filter = searchParams.get('tipo')
  const stage = searchParams.get('etapa')
  const size = searchParams.get('raza')

  useSEO({
    title: 'Alimentos para mascotas',
    description:
      'Explora nuestra selección de alimentos para perros y gatos: secos, húmedos, naturales y snacks. Filtra por etapa y tipo de alimento.',
    canonical: '/alimentos',
  })

  const filteredProducts = products.filter((product) => {
    if (filter && product.type !== filter.replace('humedo', 'wet').replace('seco', 'dry').replace('natural', 'natural').replace('snacks', 'snack')) {
      return false
    }
    if (stage && product.stage !== stage.replace('cachorro', 'puppy').replace('adulto', 'adult').replace('senior', 'senior')) {
      return false
    }
    return true
  })

  const activeFilters = []
  if (filter) activeFilters.push(filter)
  if (stage) activeFilters.push(stage)
  if (size) activeFilters.push(size)

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
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Todos los alimentos
          </h1>
          <p className="text-gray-500">
            Encuentra alimentos para perros y gatos de todas las etapas.
            {activeFilters.length > 0 && (
              <span className="ml-2 text-primary font-medium">
                · Filtros: {activeFilters.join(', ')}
              </span>
            )}
          </p>
        </motion.div>

        <ProductGrid
          products={filteredProducts}
          columns={4}
          onAddToCart={handleAddToCart}
        />

        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500">
              No se encontraron productos con los filtros aplicados.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
