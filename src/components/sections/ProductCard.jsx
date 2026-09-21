import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { calculateDiscount, formatPrice } from '@/utils/seo'
import Rating from '@ui/Rating'
import Badge from '@ui/Badge'
import ProductBadge from '@ui/ProductBadge'
import { useCart } from '@/hooks/useCart'
import { useState } from 'react'

export default function ProductCard({ product, index = 0, onAddToCart }) {
  const { addItem } = useCart()
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    if (onAddToCart) onAddToCart(product)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/producto/${product.slug}`} className="block">
        <motion.div
          className="card h-full overflow-hidden group"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-56 bg-gray-50 overflow-hidden">
            <ProductBadge type={product.badges?.[0]} />
            {!imageError && (
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            )}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <span className="text-gray-400 text-sm">Imagen no disponible</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.button
                onClick={handleAddToCart}
                className="w-10 h-10 rounded-full bg-white text-carbon shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Agregar ${product.name} al carrito`}
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </motion.div>
            {product.discount > 0 && (
              <div className="absolute top-4 right-4 bg-primary text-white px-2.5 py-1 rounded-full text-xs font-bold">
                -{product.discount}%
              </div>
            )}
          </div>

          <div className="p-6">
            <Badge variant="neutral" size="sm" className="mb-2">
              {product.brand}
            </Badge>
            <h3 className="font-bold text-carbon mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{product.weight}</p>

            <div className="flex items-center gap-2 mb-3">
              <Rating rating={product.rating} reviewCount={product.reviewCount} showCount={false} size="sm" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-bold text-carbon">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-xs text-primary font-semibold">
                    Ahorras {calculateDiscount(product.originalPrice, product.price)}%
                  </span>
                </>
              )}
            </div>

            <motion.button
              onClick={handleAddToCart}
              className="w-full btn btn-outline text-sm py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agregar al carrito
            </motion.button>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
