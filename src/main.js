import Default from '~/layouts/Default.vue';
import 'typeface-spectral';

import 'prismjs/themes/prism.css';
import '~/assets/css/main.css';

export default function(Vue, { head }) {
	Vue.component('Layout', Default);

	head.htmlAttrs = { lang: 'en' };
}
