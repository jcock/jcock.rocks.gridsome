<template>
	<footer class="footer" role="contentinfo">
		<nav-site />
		<p class="copyright">&copy; {{ new Date().getFullYear() }} Jason Cockerham</p>
	</footer>
</template>

<script>
import NavSite from '@/components/nav/NavSite';

export default {
	name: 'LayoutFooter',
	components: {
		NavSite
	}
}
</script>

<style scoped>
.footer {
	padding: calc(var(--step-6) * 2) var(--step-3) var(--step-0);
}

.copyright {
	color: var(--navLinkColor);
	font-size: calc(var(--step--1) * 0.8);
	margin: var(--step-3) 0 0 var(--step-0);
	opacity: 0.5;

	@media screen and (min-width: 54rem) {
		font-size: calc(var(--step--2) * 0.8);
		margin-left: calc(50% + calc(var(--step-0) / 3));
	}
}
</style>
