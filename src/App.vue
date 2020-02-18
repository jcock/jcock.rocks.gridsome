<template>
	<transition name="fade" mode="out-in" appear>
		<router-view />
	</transition>
</template>

<script>
import site from '@/data/site.json'

export default {
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
