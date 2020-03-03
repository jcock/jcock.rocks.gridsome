<template>
	<footer class="footer" role="contentinfo">
		<anchor to="#top" classes="btn--top" aria-label="Back to the top">↑</anchor>
		<nav-site />
	</footer>
</template>

<script>
import Anchor from '@/components/nav/Anchor';
import NavSite from '@/components/nav/NavSite';

export default {
	name: 'LayoutFooter',
	components: {
		Anchor,
		NavSite
	}
}
</script>

<style scoped>
.footer {
	padding: var(--step-0) var(--step-3);

	@media screen and (min-width: 54rem) {
		align-items: start;
		display: grid;
		grid-auto-flow: dense;
		grid-gap: var(--step-0);
		grid-template-columns: auto 1fr;
		justify-content: start;
	}
}

.btn--top {
	display: inline-block;
	opacity: 0.33;
	transition: color var(--transitionTimingBase) ease-in-out, opacity var(--transitionTimingBase) ease-in-out;

	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}
}
</style>
