<template>
	<Layout>
		<h1 class="intro">I’m Jason Cockerham and I make internets.</h1>

		<div class="posts">
			<PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
		</div>
	</Layout>
</template>

<script>
import PostCard from '~/components/PostCard.vue';

export default {
	name: 'Home',
	components: {
		PostCard
	}
}
</script>

<style scoped>
.intro {
	color: var(--grayLight);
	font-size: var(--step-0);
	font-weight: var(--fontWeightNormal);
	margin-bottom: var(--step-6);

	@media screen and (min-width: 54rem) {
		margin-left: calc(50% + 1rem);
	}
}

.posts {
	@media screen and (min-width: 54rem) {
		display: grid;
		grid-auto-flow: dense;
		grid-gap: var(--step-0);
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 90rem) {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>

<page-query>
query {
	posts: allWork(filter: { published: { eq: true }}) {
		edges {
			node {
				id
				title
				date (format: "D. MMMM YYYY")
				roles
				exerpt
				cover (width: 770, height: 575, quality: 90, fit: inside)
				path
			}
		}
	}
}
</page-query>
