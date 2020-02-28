<template>
	<article>
		<figure>
      	<g-image :alt="$page.work.title" v-if="$page.work.cover" :src="$page.work.cover" />
			<figcaption>{{ $page.work.title }}</figcaption>
		</figure>

		<header>
			<h1>{{ $page.work.title }}</h1>
			<ul>
				<li v-for="tag in $page.work.tags" :key="tag.id">{{ tag.title }}</li>
			</ul>
		</header>

		<main v-html="$page.work.content" />
	</article>
</template>

<script>
import site from '@/data/site.json';

export default {
	metaInfo() {
		return {
			title: this.$page.work.title,
			meta: [
				{ key: 'description', name: 'description', content: this.$page.work.description },
				{ key: 'og:url', property: 'og:url', content: `${site.url}${this.$page.work.path}` },
				{ key: 'og:title', property: 'og:title', content: this.$page.work.title },
				{ key: 'og:description', property: 'og:description', content: this.$page.work.description },
				{ key: 'og:image', property: 'og:image', content: `${site.url}${this.$page.work.og.src}` }
			]
		}
	}
}
</script>

<page-query>
query Work ($path: String) {
	work (path: $path) {
		id
		title
		path
		slug
		datetime: date (format: "YYYY-MM-DD HH:mm:ss")
		content
		description
		cover
		og (width: 1200, height: 630, quality: 90)
		tags {
			id
			title
		}
	}
}
</page-query>
