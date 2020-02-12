<template>
	<article>
		<figure>
      	<g-image :alt="$page.work.title" v-if="$page.work.cover" :src="$page.work.cover" />
		</figure>

		<header>
			<h1>{{ $page.work.title }}</h1>
		</header>

		<main v-html="$page.work.content" />

		<footer>
			<ul>
				<li v-for="tag in $page.work.tags" :key="tag.id">
					<g-link :to="`${tag.path}/`">{{ tag.title }}</g-link>
				</li>
			</ul>
		</footer>
	</article>
</template>

<script>
export default {
	metaInfo () {
		return {
			title: this.$page.work.title,
			meta: [
				{
					name: 'description',
					content: this.$page.work.description
				}
			]
		}
	}
}
</script>

<page-query>
query Work ($path: String) {
	work (path: $path) {
		title
		path
		slug
		datetime: date (format: "YYYY-MM-DD HH:mm:ss")
		content
		description
		cover
		tags {
			id
			title
			path
		}
	}
}
</page-query>
