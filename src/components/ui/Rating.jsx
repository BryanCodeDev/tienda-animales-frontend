import { Star, StarHalf } from 'lucide-react'

export default function Rating({ rating, reviewCount, showCount = true, size = 'md' }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${sizeClasses[size]} fill-secondary text-secondary`}
          />
        ))}
        {hasHalf && <StarHalf className={`${sizeClasses[size]} fill-secondary text-secondary`} />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${sizeClasses[size]} text-gray-300`} />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-gray-500 ml-1">
          ({reviewCount} {reviewCount === 1 ? 'reseña' : 'reseñas'})
        </span>
      )}
    </div>
  )
}
