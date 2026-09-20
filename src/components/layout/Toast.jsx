import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle } from 'lucide-react'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    const id = Date.now().toString()
    const autoClose = toast.duration !== 0
    setToasts((prev) => [...prev, { ...toast, id, autoClose }])
    if (autoClose) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, toast.duration || 4000)
    }
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-3 w-full max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onRemove={removeToast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: AlertCircle,
}

function ToastItem({ toast, onRemove }) {
  const Icon = icons[toast.type] || CheckCircle

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-2xl shadow-lg flex items-start gap-3 text-sm ${
        toast.type === 'error'
          ? 'bg-red-50 border border-red-200 text-red-800'
          : toast.type === 'warning'
          ? 'bg-orange-50 border border-orange-200 text-orange-800'
          : 'bg-green-50 border border-green-200 text-green-800'
      }`}
    >
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-medium mb-1">{toast.title || 'Notificación'}</p>
        <p className="opacity-90">{toast.message}</p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="p-1 rounded-lg hover:bg-black/5 transition-colors"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
