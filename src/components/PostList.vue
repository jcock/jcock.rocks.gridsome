<template>
	<article>
		<figure>
			<g-image :src="post.cover" v-if="post.cover" :alt="post.title" class="post--cover" />
		</figure>

		<div>
			<h2 v-html="post.title" />
			<ul>
				<li v-html="post.roles" />
			</ul>
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
