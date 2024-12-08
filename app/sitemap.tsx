// app/sitemap.ts
import {MetadataRoute} from 'next'

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const results: MetadataRoute.Sitemap = []

  // 정적 페이지
  const staticPages = [
    '',
  ]

  staticPages.forEach((route) => {
    results.push({
      url: `https://www.beauty-klass.com${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    })
  })

  return results
}

export default Sitemap
