import { useEffect } from 'react'

const SEO = ({
  title = 'Innovexex — From Null to Infinity',
  description = 'We build bespoke software that transcends boundaries. From intelligent web platforms to innovative mobile apps, we are the architects of your digital future.',
  keywords = 'software development, web development, mobile apps, custom software, technology solutions, digital transformation',
  image = '/og-image.jpg',
  url = '',
  type = 'website',
  author = 'Innovexex',
  siteName = 'Innovexex',
  twitterHandle = '@Innovexex',
  structuredData = null
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://Innovexex.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', imageUrl, 'property')
    updateMetaTag('og:url', fullUrl, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', siteName, 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', imageUrl)
    if (twitterHandle) {
      updateMetaTag('twitter:site', twitterHandle)
      updateMetaTag('twitter:creator', twitterHandle)
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-seo', 'true')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    }
  }, [title, description, keywords, imageUrl, fullUrl, type, author, siteName, twitterHandle, structuredData])

  return null
}

export default SEO

