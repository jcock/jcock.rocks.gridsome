<template>
	<Layout>
		<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
		<h1>Hello, world!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
		<ul class="home-links">
			<li><a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a></li>
			<li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a></li>
		</ul>

		<hr>

		<PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
	</Layout>
</template>

<script>
import PostList from '~/components/PostList.vue'
export default {
	components: {
		PostList
	}
}
</script>

<page-query>
query {
	posts: allWork(filter: { published: { eq: true }}) {
		edges {
			node {
				id
				title
				date (format: "D. MMMM YYYY")
				exerpt
				cover
				path
				tags {
					id
					title
					path
				}
			}
		}
	}
}
</page-query>
