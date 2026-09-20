import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-primary hover:bg-primary/90 text-white focus:ring-primary',
  secondary: 'bg-secondary hover:bg-secondary/90 text-carbon focus:ring-secondary',
  natural: 'bg-natural hover:bg-natural/90 text-white focus:ring-natural',
  outline: 'border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary',
  ghost: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-300',
  dark: 'bg-carbon hover:bg-carbon/90 text-cream focus:ring-carbon',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-4 text-xl',
  }

  const variantClasses = variants[variant] || variants.primary

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${
    fullWidth ? 'w-full' : ''
  } ${className}`

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
    </motion.button>
  )
}
