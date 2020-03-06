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
			<h2>A little recognition</h2>
			<ul class="awards--list">
				<li class="award">
					<webby />
				</li>
				<li class="award">
					<addy />
				</li>
				<li class="award">
					<web-award />
				</li>
			</ul>
		</section>
	</layout>
</template>

<script>
import Webby from '@/assets/img/awards/webby.svg';
import Addy from '@/assets/img/awards/addy.svg';
import WebAward from '@/assets/img/awards/webaward.svg';

export default {
	name: 'About',
	metaInfo: {
		title: 'About'
	},
	components: {
		Webby,
		Addy,
		WebAward
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
		grid-template-columns: repeat(12, 1fr);
		justify-items: start;
	}
}

.about {
	align-self: center;
	grid-row: 3 / 4;
	max-width: 38rem;
	z-index: 2;

	@media screen and (min-width: 62rem) {
		grid-area: 1 / 7 / 2 / 13;
		max-width: 45rem;
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
		grid-area: 1 / 1 / 2 / 8;
		opacity: 0.33;
	}
}

.photo {
	object-fit: cover;
	object-position: 50%;
	height: 100%;
	width: 100%;
}

.awards--list {
	list-style: none;
	padding: 0;

	li {
		&::before {
			content: "\200B";
			position: absolute;
		}
	}
}
</style>
