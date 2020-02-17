<template>
	<Layout>
		<g-image alt="Example image" src="~/favicon.png" width="135" />

		<h1>Hello, world!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
		<ul class="home-links">
			<li><a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a></li>
			<li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a></li>
		</ul>

		<hr>

		<ol>
			<li v-for="edge in $page.works.edges" :key="edge.node.id" :post="edge.node">
				<article>
					<g-image :alt="edge.node.title" v-if="edge.node.cover" :src="edge.node.cover" class="post--cover" />

					<div>
						<h2 v-html="edge.node.title" />
						<p v-html="edge.node.exerpt" />

						<g-link :to="edge.node.path">More</g-link>
					</div>
				</article>
			</li>
		</ol>
	</Layout>
</template>

<page-query>
query {
	works: allWork(filter: { published: { eq: true }}) {
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

<script>
export default {
	metaInfo: {
		title: 'Work'
	}
}
</script>

<style scoped>
.post--cover {
	max-width: 100%;
}
</style>
