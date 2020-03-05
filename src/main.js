import Fragment from 'vue-fragment';
import VueScrollTo from 'vue-scrollto';

import site from '~/data/site.json';
import Default from '~/layouts/Default.vue';

import 'prismjs/themes/prism.css';
import '~/assets/css/app.css';

export default function(Vue, { head }) {
	Vue.component('Layout', Default);

	// Vue Directives
	Vue.use(Fragment);
	Vue.use(VueScrollTo, {
		duration: 300,
		easing: 'ease-in-out'
	});

	// Meta and Attributes
	head.htmlAttrs = { lang: 'en' };
	head.siteName = site.name;
	head.titleTemplate = titleChunk => {
		return titleChunk ? `${titleChunk} | ${site.name}` : `${site.name}`;
	};
	head.meta.push(
		{ charset: 'utf-8' },
		{ name: 'referrer', content: 'no-referrer-when-downgrade' },
		{ key: 'description', name: 'description', content: site.description },
		{ key: 'author', name: 'author', content: site.author.name },
		{ key: 'og:url', property: 'og:url', content: site.url },
		{ key: 'og:title', property: 'og:title', content: site.name },
		{ key: 'og:description', property: 'og:description', content: site.description },
		{ key: 'og:image', property: 'og:image', content: `${site.url}/og.png` },
		{ property: 'og:type', content: 'website' },
		{ property: 'fb:app_id', content: site.identity.facebook },
		{ name: 'msapplication-TileColor', content: site.color.primary },
		{ name: 'theme-color', content: site.color.primary },
		{ name: 'google-site-verification', content: site.identity.google },
		{ name: 'msvalidate.01', content: site.identity.microsoft }
	);

	head.link.push(
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
		{ rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/favicon.svg' },
		{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: site.color.primary },
		{ rel: 'manifest', href: '/site.webmanifest' },
		{ rel: 'preload', as: 'font', href: '/assets/fonts/Inter.roman.woff2' },
		{ rel: 'preload', as: 'font', href: '/assets/fonts/Inter.italic.woff2' },
		// { rel: 'preconnect', href: 'https://www.google-analytics.com' },
		{ rel: 'preconnect', href: site.url },
		{ rel: 'canonical', href: site.url }
	);
}
