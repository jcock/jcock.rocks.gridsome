<template>
	<div>
		<layout-header />
		<transition name="fade" mode="out-in" appear>
			<router-view />
		</transition>
	</div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader';
import site from '@/data/site.json';

export default {
	components: {
		LayoutHeader
	},
	metaInfo: {
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} | ${site.name}` : `${site.name}`;
		},
		meta: [
			{
				key: 'description',
				name: 'description',
				content: `${site.description}`
			}
		]
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 200ms ease-in-out;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
