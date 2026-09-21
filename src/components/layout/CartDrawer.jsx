import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Plus, Minus, Trash2, MessageCircle } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/seo'
import Button from '@ui/Button'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants/config'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, clearCart, subtotal, totalItems } =
    useCart()

  const handleWhatsApp = () => {
    const productList = items
      .map((item) => `${item.name} (${item.quantity}x)`)
      .join('\n')
    const message = `${WHATSAPP_MESSAGE}\n\nProductos en carrito:\n${productList}\n\nTotal: ${formatPrice(subtotal)}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-white shadow-2xl z-[100] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-carbon">Tu carrito</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar carrito"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-carbon text-sm line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-carbon">
                          {formatPrice(item.price)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-1 text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-gray-100 p-6"
              >
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Envío</span>
                    <span className="text-gray-500">Por calcular</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-primary">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    className="mb-2"
                    onClick={handleWhatsApp}
                    icon={MessageCircle}
                    iconPosition="right"
                  >
                    Finalizar en WhatsApp
                  </Button>
                  <Button variant="secondary" size="md" fullWidth onClick={clearCart}>
                    Vaciar carrito
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Serás redirigido a WhatsApp para confirmar tu pedido.
                </p>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
