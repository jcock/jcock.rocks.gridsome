<template>
	<layout>
		<transition name="in-up" mode="out-in" appear>
			<h1 class="intro">I’m Jason Cockerham and I make internets.</h1>
		</transition>

		<!-- <cld-image alt="This is an image" class="cld-responsive" publicId="sample.jpg" width="auto" fetchFormat="auto" quality="auto" dpr="auto" crop="scale" secure="true" responsive="width" /> -->

		<transition-group name="staggered" tag="section" class="posts" role="list" appear>
			<PostCard v-for="(edge, index) in $page.posts.edges" :key="edge.node.id" :post="edge.node" :style="{ transitionDelay: `${index}00ms` }" role="listitem" />
		</transition-group>
	</layout>
</template>

<script>
import PostCard from '@/components/PostCard.vue';

export default {
	name: 'Home',
	components: {
		PostCard
	}
}
</script>

<style scoped>
.intro {
	color: var(--gray400);
	font-size: var(--step-1);
	font-weight: var(--fontWeightNormal);
	margin-bottom: var(--step-6);

	@media screen and (min-width: 54rem) {
		margin-left: calc(50% + (var(--step-0) / 2));
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

/* Animations */
.in-up-enter-active,
.in-up-leave-active {
	transition: opacity var(--timingSm) var(--easePrimary), transform var(--timingSm) var(--easePrimary);
}

.in-up-enter,
.in-up-leave-to {
	opacity: 0;
	transform: translateY(10%);
}

.staggered-enter-active,
.staggered-leave-active {
	transition: opacity var(--timingSm) var(--easePrimary);
}

.staggered-enter,
.staggered-leave-to {
	opacity: 0;
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
