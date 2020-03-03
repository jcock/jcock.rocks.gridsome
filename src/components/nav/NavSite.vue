<template>
	<nav class="nav-site" role="navigation">
		<ol class="nav">
			<li><g-link class="link" to="/">Work</g-link></li>
			<li><g-link class="link" to="/about/">About</g-link></li>
			<li><a class="link" href="#">Email</a></li>
			<li><g-link class="link" to="/colophon/">Colophon</g-link></li>
		</ol>
	</nav>
</template>

<script>
import Jcock from '~/assets/img/brand/jcock.svg';

export default {
	name: 'NavSite'
}
</script>

<style scoped>
.nav-site {
	font-size: var(--step--1);

	@media screen and (min-width: 54rem) {
		font-size: var(--step--2);
	}
}

.nav {
	grid-gap: var(--step-0);
	grid-template-columns: repeat(2, 1fr);
}

.link {
	color: #fff;
	display: block;
	opacity: 0.5;
	padding: calc(var(--step-0) / 2) 0;
	transition: opacity var(--transitionTimingBase) ease-in-out;

	@media screen and (min-width: 54rem) {
		display: inline-block;
		padding: calc(var(--step-0) / 4) 0;
	}

	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}
}
</style>
