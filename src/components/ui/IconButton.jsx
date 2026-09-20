import { motion } from 'framer-motion'

export default function IconButton({
  icon: Icon,
  label,
  onClick,
  className = '',
  variant = 'ghost',
  size = 'md',
  ...props
}) {
  const variantClasses = {
    ghost: 'hover:bg-gray-50 text-gray-600',
    primary: 'hover:bg-primary/10 text-primary',
    secondary: 'hover:bg-secondary/10 text-secondary',
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </motion.button>
  )
}
