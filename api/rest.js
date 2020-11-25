
const express = require('express')
const axios = require('axios')

const app = express()

function mountXML(routes, domain) {
  let xml_content = ['<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']

  routes.forEach(route => {
    xml_content.push('  <url>',
      `    <loc>${domain}/${route.url}</loc>`,
      `    <lastmod>${route.lastMod}</lastmod>`,
      '  </url>')
  })

  xml_content.push('</urlset>')

  return xml_content.join('\n')
}

app.get('/sitemap.xml', async function (req, res, next) {
  const routes = await getUrls()

  const xml = mountXML(routes, 'https://lingotraducao.com.br')

  res.set('Content-Type', 'text/xml')
  res.send(xml)
})

async function getUrls() {
  const routes = [
    {
      url: '',
      lastMod: '2020-11-24',
    },
    {
      url: '?lang=en-US',
      lastMod: '2020-11-24',
    }]

  for (let lang of ['ptbr', 'enus']) {
    const { data } = await axios.get(`https://wordpress.lingotraducao.com.br/wp-json/wp/v2/posts?slug=minibio-${lang}`)

    lang = lang.substring(0, 2) + '-' + lang.substring(2, 4).toUpperCase()
    const content = lang === 'pt-BR' ? 'conheca-a-lingo' : 'about-lingo'

    data.forEach(post => routes.push({
      url: `?lang=${lang}&amp;c=${content}`,
      lastMod: post.modified.substring(0, 10)
    }))
  }

  const { data: services } = await axios.get('https://wordpress.lingotraducao.com.br/wp-json/wp/v2/posts?categories=8,9')

  services.forEach(service => routes.push({
    url: `?lang=${service.categories.includes(8) ? 'pt-BR' : 'en-US'}&amp;c=${service.slug}`,
    lastMod: service.modified.substring(0, 10)
  }))

  return routes
}

module.exports = app

