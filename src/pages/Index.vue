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

	@media screen and (min-width: 62rem) {
		margin-left: calc(50% + 1rem);
	}
}

.posts {
	display: grid;
	grid-auto-flow: dense;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

	@media screen and (min-width: 62rem) {
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
				cover (width: 640, height: 480, quality: 90, fit: contain)
				path
			}
		}
	}
}
</page-query>
