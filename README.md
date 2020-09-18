# lingo-website

> Front-end do website da Lingo

# Stack

- Nuxt.js
- BootstrapVue
- WordPress REST API

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# Api

O conteúdo do site está sendo provido pela API REST do Wordpress, atualmente instalado e hospedado na Hostgator.

A url da API está armazenada na constante API_URL definida em /config/index.js

# Como Publicar

O deploy é feito de maneira automática no Netlify (netlify.com) enviando um commit na branch `master` deste repositório.
