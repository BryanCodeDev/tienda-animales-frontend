import { useState, useEffect, useCallback } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue(value)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value))
        }
      } catch (error) {
        console.error(error)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      const newScrollY = window.scrollY
      if (newScrollY > scrollY && newScrollY > 80) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setScrollY(newScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  return { scrollDirection, scrollY }
}
