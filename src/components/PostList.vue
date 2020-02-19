<template>
	<article>
		<g-image :alt="post.title" v-if="post.cover" :src="post.cover" class="post--cover" />

		<div>
			<h2 v-html="post.title" />
			<p v-html="post.exerpt" />
			<g-link :to="post.path">More</g-link>
		</div>
	</article>
</template>

<script>
export default {
	props: ['post']
}
</script>
