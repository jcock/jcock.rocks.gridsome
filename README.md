# The portfolio of **Jason Cockerham** 💩
User Experience Designer and Front-End Developer.

[jcock.rocks](http://jcock.rocks)

---

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg?style=for-the-badge)](http://unlicense.org/)

---

## In the box

* [Gridsome](https://gridsome.org/)
* [Vue.js](https://vuejs.org/)

### Gridsome

* [@gridsome/source-filesystem](https://github.com/gridsome/gridsome/tree/master/packages/source-filesystem)
* [@gridsome/transformer-remark](https://github.com/gridsome/gridsome/tree/master/packages/transformer-remark)
* [@gridsome/remark-prismjs](https://github.com/gridsome/gridsome/tree/master/packages/remark-prismjs)
* [@gridsome/plugin-critical](https://github.com/gridsome/gridsome/tree/master/packages/plugin-critical)
* [@gridsome/plugin-sitemap](https://github.com/gridsome/gridsome/tree/master/packages/plugin-sitemap)
* [gridsome-plugin-service-worker](https://github.com/khalyomede/gridsome-plugin-service-worker)

### Font

* [spectral](https://fonts.google.com/specimen/Spectral) via [npm package](https://github.com/KyleAMathews/typefaces/tree/master/packages/spectral)

### JavaScript

* [webpack](http://webpack.github.io)
* [babel](babeljs.io) with `@babel/preset-env`

### CSS

* [postcss-import](https://github.com/postcss/postcss-import)
* [postcss-preset-env](https://preset-env.cssdb.org/)
* [cssnano](https://cssnano.co/)
* [purgecss](https://purgecss.com/)
* [sanitize.css](https://github.com/10up/sanitize.css)

### Dev Tools

* [eslint](http://eslint.org/)  with `eslint-config-airbnb-base`
* [stylelint](http://stylelint.io/) with `stylelint-config-recommended`
* [prettier](https://prettier.io/)
* [editorConfig](http://editorconfig.org/)

## Tasks

The following tasks are exposed in `package.json`:

```
"scripts": {
	"build": "gridsome build",
	"clean": "rm -rf dist",
	"explore": "gridsome explore",
	"lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
	"lint:fix": "eslint --fix --ext .js,.vue --ignore-path .gitignore .",
	"precommit": "npm run lint",
	"start": "gridsome develop"
}
```

## Offline Support

The service worker (`/service-worker.js` | `/assets/js/service-worker.js`) provides basic offline capabilities and follows a `networkFirst` strategy for static files and a `cacheFirst` strategy for google fonts and images. This means that visitors will always see the latest content and styles when a network connection is available. After the first visit, webfonts and images will be served from the cache and visited pages will work offline. The last cached version of the page will be served in the event that a user has no network connection. If you do not have dynamic content and changing static files, consider configuring workbox to use precaching. That way, your whole page will work offline once a single URL is visited.

---

### Enjoy

🤘
