import {MetadataRoute} from 'next'

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      }
    ],
    sitemap: 'https://www.beauty-klass.com/sitemap.xml',
    host: 'https://www.beauty-klass.com',
  }
}

export default Robots
