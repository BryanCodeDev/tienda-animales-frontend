import { motion } from 'framer-motion'

const badgeVariants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-carbon',
  natural: 'bg-natural text-white',
  neutral: 'bg-gray-100 text-gray-700',
  dark: 'bg-carbon text-cream',
  outline: 'border border-gray-300 text-gray-600',
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = false,
}) {
  const baseClasses =
    'inline-flex items-center font-medium rounded-full'

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  const variantClasses = badgeVariants[variant] || badgeVariants.primary
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`

  if (animated) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={classes}
      >
        {children}
      </motion.span>
    )
  }

  return <span className={classes}>{children}</span>
}
