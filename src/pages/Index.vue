<template>
	<Layout>
		<h1>Hello, world!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
		<ul class="home-links">
			<li><a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a></li>
			<li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a></li>
		</ul>

		<hr>

		<div class="grid">
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
			<figure class="item"><g-image src="https://picsum.photos/800/600" /></figure>
		</div>

		<hr>

		<PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
	</Layout>
</template>

<script>
import PostList from '~/components/PostList.vue'
export default {
	name: 'Home',
	components: {
		PostList
	}
}
</script>

<style scoped>
.grid {
	display: grid;
	grid-auto-flow: dense;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

	@media screen and (min-width: 62rem) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.item {
	margin: 0;
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
				exerpt
				cover(width: 640, height: 360, quality: 90, fit: contain)
				path
				tags {
					id
					title
				}
			}
		}
	}
}
</page-query>
