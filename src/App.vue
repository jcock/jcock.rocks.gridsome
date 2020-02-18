<template>
	<div id="app">
		<router-view />
	</div>
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
			},
			{
				key: 'author',
				name: 'author',
				content: `${site.author.name}`
			}
		]
	}
}
</script>
