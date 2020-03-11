<template>
	<nav class="navbar" role="navigation">
		<brand />

		<ol class="nav">
			<li><g-link class="link" to="/">Work</g-link></li>
			<li><g-link class="link" to="/about/">About</g-link></li>
		</ol>
	</nav>
</template>

<script>
import Brand from '@/components/nav/Brand';

export default {
	name: 'NavBar',
	components: {
		Brand
	}
}
</script>

<style scoped>
.navbar {
	align-items: start;
	display: grid;
	font-size: var(--step--1);
	grid-gap: var(--step-0);
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: var(--step-6);
	padding: var(--step-0) var(--step-3);

	@media screen and (min-width: 54rem) {
		font-size: var(--step--2);
	}
}

.nav {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.link {
	color: var(--navLinkColor);
	display: block;
	opacity: 0.5;
	padding: calc(var(--step-0) / 2) var(--step-0);
	transform: translateX(calc(var(--step-0) * -1));
	transition: opacity var(--timingBase) var(--easePrimary);

	@media screen and (min-width: 54rem) {
		display: inline-block;
		padding: calc(var(--step-0) / 4) calc(var(--step-0) / 2);
		transform: translateX(calc((var(--step-0) / 2) * -1));
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
</style>
