<template>
	<header class="header" id="top" role="banner">
		<anchor to="#main" classes="btn--skip" @click.stop>Skip to main content</anchor>
		<nav-bar />
	</header>
</template>

<script>
import Anchor from '@/components/nav/Anchor';
import NavBar from '@/components/nav/Navbar';

export default {
	name: 'LayoutHeader',
	components: {
		Anchor,
		NavBar
	}
}
</script>

<style scoped>
.btn--skip {
	left: 1rem;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 0;
	z-index: 9999;

	&:not(:focus) {
		border: 0;
		clip: rect(0, 0, 0, 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
}
</style>
