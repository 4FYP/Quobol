import { useEffect } from 'react'
import { CONTACT, services } from '../data/services'

/** Inject Organization + ProfessionalService + ItemList JSON-LD for SEO. */
export default function JsonLd() {
  useEffect(() => {
    const id = 'quobol-jsonld'
    const existing = document.getElementById(id)
    if (existing) existing.remove()

    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${CONTACT.siteUrl}/#organization`,
          name: CONTACT.companyName,
          url: CONTACT.siteUrl,
          logo: `${CONTACT.siteUrl}/logo-emblem.png`,
          email: CONTACT.email,
          sameAs: [CONTACT.linkedin, CONTACT.instagram, CONTACT.facebook, CONTACT.tiktok],
          description:
            'Quobol is a full-spectrum software development and IT consulting company offering AI integration, Salesforce and CRM, web and mobile development, RPA, cloud, and digital transformation.',
          slogan: CONTACT.tagline,
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${CONTACT.siteUrl}/#business`,
          name: CONTACT.companyName,
          url: CONTACT.siteUrl,
          image: `${CONTACT.siteUrl}/logo-emblem.png`,
          email: CONTACT.email,
          priceRange: '$$',
          areaServed: 'Worldwide',
          serviceType: services.map((s) => s.title),
        },
        {
          '@type': 'ItemList',
          name: 'Quobol Services',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `${CONTACT.siteUrl}/services/${s.slug}`,
            description: s.seoDescription,
          })),
        },
        {
          '@type': 'WebSite',
          '@id': `${CONTACT.siteUrl}/#website`,
          url: CONTACT.siteUrl,
          name: CONTACT.companyName,
          description:
            'Software development, Salesforce CRM, AI integration, RPA, cloud, and IT consulting.',
          publisher: { '@id': `${CONTACT.siteUrl}/#organization` },
        },
      ],
    }

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [])

  return null
}
