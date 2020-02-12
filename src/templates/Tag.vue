<template>
	<Layout>
		<h1>Tag: # {{ $page.tag.title }}</h1>

		<section>
			<ol>
				<li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node">
					<h2><g-link :to="`${edge.node.path}/`">{{ edge.node.title }}</g-link></h2>
					<p>{{ edge.node.excerpt }}</p>
				</li>
			</ol>
		</section>
	</Layout>
</template>

<page-query>
query Tag ($path: String!) {
	tag (path: $path) {
		id
		title
		path
		belongsTo {
			edges {
				node {
					...on Work {
						id
						title
						datetime: date (format: "YYYY-MM-DD HH:mm:ss")
						path
						content
						excerpt
						description
					}
				}
			}
		}
	}
}
</page-query>
