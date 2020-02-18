import site from '@/data/site.json';
import Default from '~/layouts/Default.vue';
import 'typeface-spectral';

import 'prismjs/themes/prism.css';
import '~/assets/css/main.css';

export default function(Vue, { head }) {
	Vue.component('Layout', Default);

	head.htmlAttrs = { lang: 'en' };

	head.meta.push(
		{
			charset: 'utf-8'
		},
		{
			name: 'referrer',
			content: 'no-referrer-when-downgrade'
		},
		{
			name: 'msapplication-TileColor',
			content: '#0d0d0d'
		},
		{
			name: 'theme-color',
			content: '#0d0d0d'
		}
	);

	head.link.push(
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png'
		},
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: '/favicon.svg'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.png'
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#0d0d0d'
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest'
		},
		{
			rel: 'canonical',
			href: `${site.url}`
		},
		{
			rel: 'preconnect',
			href: `${site.url}`
		}
	);
}
