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
	transition: opacity var(--timingBase) var(--easePrimary);
}

.body {
	padding: var(--step-0) 0;
}

.title,
.text {
	margin: 0;
	transition: color var(--timingBase) var(--easePrimary);
}

.title {
	color: var(--gray400);
	font-size: var(--step-0);
	font-weight: var(--fontWeightNormal);
}

.text {
	color: var(--gray500);
	font-size: var(--step--1);
}

.link {
	display: block;

	&:hover,
	&:active,
	&:focus {
		& .cover {
			opacity: 0.5;
		}

		& .title {
			color: var(--linkHoverColor);
		}

		& .text {
			color: var(--gray400);
		}
	}
}
</style>
