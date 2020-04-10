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

O conteúdo do site está sendo provido pelo Wordpress através de sua API REST (https://developer.wordpress.org/rest-api/) atualmente instalado e hospedado na Hostgator.

A url da API está armazenada na constante API_URL definida em /config/index.js

# Como Publicar

1. Gerar arquivos estáticos

```
yarn generate
```
Isso irá gerar o diretório `dist`

2. Enviar TODAS as pastas e arquivos contidos na `dist` para o servidor da Hostgator na pasta `public_html`

