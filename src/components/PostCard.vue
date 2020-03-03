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
.cover {
	margin: 0;
	transition: opacity var(--transitionTimingBase) ease-in-out;
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

.link {
	display: block;

	&:hover,
	&:active,
	&:focus {
		& .cover {
			opacity: 0.5;
		}
	}
}
</style>
