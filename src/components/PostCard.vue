<template>
	<g-link :to="post.path" :aria-label="'Read more about ' + post.title" class="link">
		<figure class="cover">
			<g-image :src="post.cover" v-if="post.cover" :alt="post.title" class="post--cover" />
		</figure>

		<div class="body">
			<h2 class="title" v-html="post.title" />
			<p class="text" v-html="post.exerpt" />
		</div>
	</g-link>
</template>

<script>
export default {
	name: 'PostCard',
	props: ['post']
}
</script>

<style scoped>
.link {
	display: inline-block;
}

.cover {
	margin: 0;
}

.body {
	padding: var(--step-0) 0;
}

.title {
	font-size: var(--step-0);
	font-weight: var(--fontWeightNormal);
	margin: 0;
}

.text {
	color: var(--gray);
	font-size: var(--step--1);
	margin: 0;
}
</style>
