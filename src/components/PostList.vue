<template>
	<article>
		<g-image :src="post.cover" v-if="post.cover" :alt="post.title" class="post--cover" width="640" fit="inside" />

		<div>
			<h2 v-html="post.title" />
			<p v-html="post.exerpt" />
			<g-link :to="post.path" :aria-label="'Read more about ' + post.title">More</g-link>
		</div>
	</article>
</template>

<script>
export default {
	props: ['post']
}
</script>
