import DefaultLayout from '~/layouts/Default.vue';

import 'prismjs/themes/prism.css';
import '~/assets/css/main.css';

export default function(Vue) {
	Vue.component('Layout', DefaultLayout);
}
