<template>
	<nav role="navigation">
		<ul class="nav">
			<li><g-link class="link" to="/">Work</g-link></li>
			<li><g-link class="link" to="/about/">About</g-link></li>
			<li><a class="link" :href="`mailto:${contactEmail}`">Email</a></li>
			<li><g-link class="link" to="/colophon/">Colophon</g-link></li>
			<li><g-link class="link" to="/uses/">Uses</g-link></li>
			<li><theme-toggle /></li>
			<li><anchor to="#top" classes="btn--top" aria-label="Back to the top">↑</anchor></li>
		</ul>
	</nav>
</template>

<script>
import site from '@/data/site.json';
import Anchor from '@/components/nav/Anchor';
import ThemeToggle from '@/components/ThemeToggle.vue';

export default {
	name: 'NavSite',
	components: {
		Anchor,
		ThemeToggle
	},
	data() {
		return {
			contactEmail: site.author.email
		}
	}
}
</script>

<style scoped>
.nav {
	align-items: end;
	display: grid;
	font-size: var(--step--1);
	grid-gap: 0 var(--step-0);
	grid-auto-flow: column;
	grid-template-columns: repeat(3, 1fr);
	margin: 0;

	@media screen and (min-width: 54rem) {
		font-size: var(--step--2);
		grid-template-columns: 2fr repeat(2, 1fr);
	}
}

li {
	&:nth-of-type(-n+3) {
		grid-column: 1 / 2;

		@media screen and (min-width: 54rem) {
			grid-column: 2 / 3;
		}
	}

	&:nth-of-type(n+4) {
		grid-column: 2 / 3;

		@media screen and (min-width: 54rem) {
			grid-column: 3 / 4;
		}
	}

	&:nth-last-of-type(1) {
		grid-column: 3 / 4;
		justify-self: end;
		margin-top: 0;

		@media screen and (min-width: 54rem) {
			justify-self: auto;
			grid-column: 1 / 2;
		}
	}
}

.link,
.toggle {
	color: var(--navLinkColor);
	display: block;
	line-height: calc(var(--fluid-min-scale-1) * 1);
	opacity: 0.5;
	padding: calc(var(--step-0) / 2) var(--step-0);
	transition: opacity var(--timingBase) var(--easePrimary);

	@media screen and (min-width: 54rem) {
		display: inline-block;
		padding: calc(var(--step-0) / 4) calc(var(--step-0) / 2);
	}

	&.active--exact,
	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}

	&:active,
	&:focus {
		box-shadow: inset 1px 1px 0 0 var(--focusColor), 0.125rem 0.125rem 0 0 var(--focusColor);
	}
}

.btn--top {
	display: inline-block;
	font-size: var(--step-1);
	line-height: 1;
	opacity: 0.5;
	padding: var(--step--2) var(--step-0);
	transition: color var(--timingBase) var(--easePrimary), opacity var(--timingBase) var(--easePrimary);

	@media screen and (min-width: 54rem) {
		font-size: var(--step-0);
		padding: calc(var(--step--2) / 4) var(--step--2);
	}

	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}
}
</style>
