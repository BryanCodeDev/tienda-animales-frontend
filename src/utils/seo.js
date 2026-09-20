import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useSEO({
  title,
  description,
    image = '/og-image.svg',
  url,
  canonical,
  breadcrumbs = [],
  noindex = false,
}) {
  const location = useLocation()
  const siteName = 'PetBloom'
  const baseUrl = 'https://petbloom.co'

  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${siteName}`
      : `${siteName} — Alimentación Premium para Perros y Gatos`

    document.title = pageTitle

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = name
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    if (description) {
      setMeta('description', description)
    }

    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.property = property
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    setOG('og:title', pageTitle)
    if (description) setOG('og:description', description)
    setOG('og:image', image.startsWith('http') ? image : `${baseUrl}${image}`)
    setOG('og:url', canonical || `${baseUrl}${location.pathname}`)
    setOG('og:site_name', siteName)
    setOG('og:type', 'website')

    const setTwitterCard = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = name
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    setTwitterCard('twitter:card', 'summary_large_image')
    setTwitterCard('twitter:title', pageTitle)
    if (description) setTwitterCard('twitter:description', description)
    setTwitterCard('twitter:image', image.startsWith('http') ? image : `${baseUrl}${image}`)

    if (canonical && !document.querySelector('link[rel="canonical"]')) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`
      document.head.appendChild(link)
    }

    if (breadcrumbs.length > 0) {
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${baseUrl}${b.url}`,
        })),
      }
      let script = document.getElementById('breadcrumb-schema')
      if (!script) {
        script = document.createElement('script')
        script.id = 'breadcrumb-schema'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(breadcrumb)
    }

    return () => {
      document.getElementById('breadcrumb-schema')?.remove()
    }
  }, [title, description, image, url, canonical, noindex, breadcrumbs, location.pathname])
}

export function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price)
}

export function calculateDiscount(originalPrice, currentPrice) {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
