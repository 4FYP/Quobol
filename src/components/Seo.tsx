import { useEffect } from 'react'
import { CONTACT } from '../data/services'

type Props = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article' | 'service'
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Per-route SEO: title, description, Open Graph, Twitter, canonical. */
export default function Seo({ title, description, path = '', type = 'website' }: Props) {
  useEffect(() => {
    const url = `${CONTACT.siteUrl}${path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'author', CONTACT.companyName)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type === 'website' ? 'website' : 'article')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', CONTACT.companyName)
    upsertMeta('property', 'og:image', `${CONTACT.siteUrl}/logo-emblem.png`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${CONTACT.siteUrl}/logo-emblem.png`)
    upsertLink('canonical', url)
  }, [title, description, path, type])

  return null
}
