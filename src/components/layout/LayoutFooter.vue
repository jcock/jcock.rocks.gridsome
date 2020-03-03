<template>
	<footer class="footer" role="contentinfo">
		<nav-site />
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
	padding: var(--step-6) var(--step-3) var(--step-0);
}
</style>
