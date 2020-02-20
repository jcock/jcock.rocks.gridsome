<template>
	<footer role="contentinfo">
		<button-anchor to="#top" classes="btn--top" aria-label="Back to the top">↑</button-anchor>
	</footer>
</template>

<script>
import ButtonAnchor from '@/components/ButtonAnchor';

export default {
	name: 'LayoutFooter',
	components: {
		ButtonAnchor
	}
}
</script>
