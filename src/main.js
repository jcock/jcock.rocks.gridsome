import Fragment from 'vue-fragment';
import { VLazyImagePlugin } from 'v-lazy-image';
import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue';

import site from '~/data/site.json';
import Default from '~/layouts/Default.vue';

import 'typeface-inter';
import 'prismjs/themes/prism.css';
import '~/assets/css/app.css';

export default function(Vue, { head }) {
	Vue.component('Layout', Default);

	// Vue Plugins
	Vue.use(Fragment);
	Vue.use(VLazyImagePlugin);
	Vue.use(Cloudinary, {
		configuration: {
			cloudName: site.cdn.cloudName,
			secure: true
		},
		components: {
			CldImage,
			CldTransformation
		}
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
		{ rel: 'preconnect', href: site.url },
		{ rel: 'canonical', href: site.url },
		{
			rel: 'preload',
			as: 'font',
			// eslint-disable-next-line global-require
			href: require('typeface-inter/Inter (web)/Inter-roman.var.woff2'),
			type: 'font/woff2'
		},
		{
			rel: 'preload',
			as: 'font',
			// eslint-disable-next-line global-require
			href: require('typeface-inter/Inter (web)/Inter-italic.var.woff2'),
			type: 'font/woff2'
		}
	);
}
