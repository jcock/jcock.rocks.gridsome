<template>
	<header class="header" id="top" role="banner">
		<anchor to="#main" classes="btn--skip sr-focusable">Skip to main content</anchor>
		<navbar />
	</header>
</template>

<script>
import Anchor from '@/components/nav/Anchor';
import Navbar from '@/components/nav/Navbar';

export default {
	name: 'LayoutHeader',
	components: {
		Anchor,
		Navbar
	}
}
</script>
