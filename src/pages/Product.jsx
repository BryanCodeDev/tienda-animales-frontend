import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  MessageCircle,
} from 'lucide-react'
import { useCart } from '@/hooks/useCart.jsx'
import { useToast } from '@components/layout/Toast.jsx'
import Rating from '@ui/Rating.jsx'
import Badge from '@ui/Badge.jsx'
import Button from '@ui/Button.jsx'
import ProductCard from '@components/sections/ProductCard.jsx'
import products, { dogProducts, catProducts } from '@data/products.js'
import { useSEO, formatPrice, calculateDiscount } from '@/utils/seo.js'
import { WHATSAPP_NUMBER } from '@constants/config.js'

export default function Product() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { addToast } = useToast()
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.slug === slug)

  useEffect(() => {
    if (!product) {
      navigate('/not-found')
    }
  }, [product, navigate])

  useSEO({
    title: product?.name || 'Producto no encontrado',
    description: product?.description || '',
    image: product?.image,
    canonical: product?.slug ? `/producto/${product.slug}` : '/alimentos',
    noindex: !product,
  })

  if (!product) {
    return null
  }

  const related = products
    .filter((p) => product.relatedProducts?.includes(p.id))
    .slice(0, 4)

  const discount = product.discount > 0 ? product.discount : calculateDiscount(product.originalPrice || 0, product.price)

  const handleAddToCart = () => {
    addItem(product, quantity)
    addToast({
      type: 'success',
      title: 'Producto agregado',
      message: `${product.name} (${quantity}x) agregado al carrito.`,
    })
  }

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en ${product.name}.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleWhatsAppBuy = () => {
    const message = `Hola, quiero comprar:\n\n${product.name} (${product.brand})\n${product.weight}\nCantidad: ${quantity}\nPrecio unitario: ${formatPrice(product.price)}\nTotal: ${formatPrice(product.price * quantity)}\n\n¿Podemos coordinar la compra?`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    }
  }

  const nextImage = () =>
    setActiveImage((i) => (i + 1) % product.images.length)
  const prevImage = () =>
    setActiveImage((i) =>
      i === 0 ? product.images.length - 1 : i - 1
    )

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-sm text-gray-500">Producto</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gray-50 mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discount}%
                </div>
              )}

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <button
                onClick={handleShare}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Compartir producto"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      i === activeImage
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - vista ${i + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="neutral" size="sm" className="mb-3">
              {product.brand}
            </Badge>
            <h1 className="text-3xl font-bold text-carbon mb-2">
              {product.name}
            </h1>

            <div className="mb-4">
              <Rating
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>

            <div className="mb-6">
              {product.originalPrice ? (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-sm font-bold">
                    -{discount}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-carbon">
                  {formatPrice(product.price)}
                </span>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {product.weight} · {product.type === 'dry' ? 'Seco' : product.type === 'wet' ? 'Húmedo' : product.type === 'snack' ? 'Snack' : product.type}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  -
                </button>
                <span className="font-bold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addItem(product, quantity)
                  addToast({
                    type: 'success',
                    title: 'Agregado al carrito',
                    message: `${product.name} agregado al carrito.`,
                  })
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Agregar a favoritos
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={ShoppingCart}
                onClick={() => {
                  addItem(product, quantity)
                  addToast({
                    type: 'success',
                    title: 'Agregado al carrito',
                    message: `${product.name} (${quantity}x) agregado al carrito.`,
                  })
                }}
              >
                Agregar al carrito
              </Button>
              <Button
                variant="natural"
                size="lg"
                fullWidth
                icon={MessageCircle}
                onClick={handleWhatsAppBuy}
              >
                Comprar ahora por WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                icon={MessageCircle}
                onClick={handleWhatsApp}
              >
                Preguntar por WhatsApp
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Demo: las compras se coordinan por WhatsApp hasta el lanzamiento del checkout.
            </p>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div>
                <h3 className="font-bold text-carbon mb-2">
                  Información del producto
                </h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex justify-between">
                    <span>Marca:</span>
                    <span>{product.brand}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tipo:</span>
                    <span>
                      {product.type === 'dry'
                        ? 'Alimento seco'
                        : product.type === 'wet'
                        ? 'Alimento húmedo'
                        : product.type === 'snack'
                        ? 'Snacks'
                        : product.type}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Peso:</span>
                    <span>{product.weight}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Etapa:</span>
                    <span>
                      {product.stage === 'puppy'
                        ? 'Cachorro'
                        : product.stage === 'adult'
                        ? 'Adulto'
                        : product.stage === 'senior'
                        ? 'Senior'
                        : product.stage}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Disponibilidad:</span>
                    <span className={product.inStock ? 'text-natural' : 'text-red-500'}>
                      {product.inStock ? 'En stock' : 'Agotado'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="mt-16 bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-carbon mb-4">
            Descripción
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <h3 className="font-bold text-carbon mb-3">Características</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600">
                <Check className="w-5 h-5 text-natural" />
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-carbon mb-3">
            Especificaciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{key}</span>
                <span className="text-carbon font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Products */}
        {related.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-carbon mb-8">
              Productos relacionados
            </h2>
            <ProductGrid
              title={null}
              products={related}
              columns={4}
              onAddToCart={(p) => {
                addItem(p, 1)
                addToast({
                  type: 'success',
                  title: 'Producto agregado',
                  message: `${p.name} agregado al carrito.`,
                })
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
