<template>
<header class="header" id="top" role="banner">
	<button-anchor to="#main" classes="btn--skip sr-focusable">Skip to main content</button-anchor>
	<navbar />
</header>
</template>

<script>
import ButtonAnchor from '@/components/ButtonAnchor';
import Navbar from '@/components/Navbar';

export default {
	name: 'LayoutHeader',
	components: {
		ButtonAnchor,
		Navbar
	}
}
</script>
