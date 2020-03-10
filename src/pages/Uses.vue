<template>
	<layout>
		<section class="intro">
			<figure class="desk">
				<g-image src="~/assets/img/keeb.webp" alt="My battlestation" class="photo" />
			</figure>
			<article class="content">
				<h1>Uses</h1>
   			<p>Hardware/software that I use most. I change up things fairly often, so this page will serve as a living document.</p>

				<p class="cite">Thanks to <a href="https://wesbos.com/uses/" rel="noopener">Wes Bos</a> and his amazing Uses page.</p>
			</article>
		</section>
	</layout>
</template>

<script>
export default {
	name: 'Uses',
	metaInfo: {
		title: 'Uses'
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

.content {
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

.desk {
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

.cite {
	font-size: var(--step--2);
	color: var(--gray);
}
</style>
