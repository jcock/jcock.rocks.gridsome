<template>
	<layout>
		<section class="intro">
			<figure class="me">
				<g-image src="~/assets/img/jcock.webp" alt="Me, working" class="photo" />
			</figure>
			<article class="about">
				<h1 class="title">I like to dabble in design and code.</h1>

				<p>In other words, I’m an experienced UX & UI Designer, Front-End Developer, Project Manager, Digital Strategist, and all-around solver of problems. I reside in Delaware and work as part of the digital team at <a href="http://abccreative.com/" rel="noopener">AB&C</a>.</p>

				<p>I’m happy to say that even after more than 15 years I haven’t lost my love for making things that have a positive impact. I love solving problems. I am so grateful to have the opportunity to work with such talented people. I’ve learned so much from them.</p>
			</article>
		</section>

		<section class="awards">
			<div class="content">
				<h2 class="title">A little recognition</h2>
				<awards-list />
			</div>
		</section>
	</layout>
</template>

<script>
import AwardsList from '@/components/AwardsList';

export default {
	name: 'About',
	metaInfo: {
		title: 'About'
	},
	components: {
		AwardsList
	}
}
</script>

<style scoped>
.intro {
	display: grid;
	grid-gap: var(--step-0);
	grid-template: auto / auto;
	justify-items: center;

	@media screen and (min-width: 62rem) {
		align-items: stretch;
		grid-template-columns: 6fr 1fr 5fr;
		justify-items: start;
	}
}

.about {
	align-self: center;
	grid-row: 3 / 4;
	max-width: 38rem;
	z-index: 2;

	@media screen and (min-width: 62rem) {
		grid-area: 1 / 2 / 2 / 5;
		max-width: 45rem;
		padding-left: var(--step-0);
	}
}

.title {
	margin-top: 0;
}

.me {
	grid-row: 1 / 2;
	margin: 0;
	width: 100%;

	@media screen and (min-width: 62rem) {
		grid-area: 1 / 1 / 2 / 3;
		opacity: 0.33;
	}
}

.photo {
	object-fit: cover;
	object-position: 50%;
	height: 100%;
	width: 100%;
}

.awards {
	margin-top: var(--step-6);

	@media screen and (min-width: 62rem) {
		display: grid;
		grid-gap: var(--step-0);
		grid-template: auto / repeat(2, 1fr);
	}

	& .content {
		grid-column: 2 / 3;
		margin-left: auto;
		margin-right: auto;
		max-width: 38rem;

		@media screen and (min-width: 62rem) {
			max-width: 45rem;
			margin-left: 0;
			margin-right: 0;
		}
	}
}
</style>
