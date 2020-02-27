import site from '~/data/site.json';
import Default from '~/layouts/Default.vue';

import 'prismjs/themes/prism.css';
import '~/assets/css/app.css';

export default function(Vue, { head }) {
	Vue.component('Layout', Default);

	head.htmlAttrs = { lang: 'en' };
	head.siteName = site.name;
	head.titleTemplate = titleChunk => {
		return titleChunk ? `${titleChunk} | ${site.name}` : `${site.name}`;
	};
	head.siteDescription = site.description;
	head.meta.push(
		{ charset: 'utf-8' },
		{ name: 'referrer', content: 'no-referrer-when-downgrade' },
		{ name: 'author', content: site.author.name },
		{ property: 'og:url', content: site.url },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:title', content: site.name },
		{ name: 'og:description', content: site.description },
		{ name: 'og:image', content: `${site.url}/og.png` },
		{ name: 'fb:app_id', content: site.identity.facebook },
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
		// { rel: 'preconnect', href: 'https://www.google-analytics.com' },
		{ rel: 'preconnect', href: site.url },
		{ rel: 'canonical', href: site.url }
	);
}
