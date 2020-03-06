<template>
	<fragment>
		<anchor to="#main" classes="btn--skip" @click.stop>Skip to main content</anchor>
		<header class="header" id="top" role="banner">
			<nav-bar />
		</header>
	</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Anchor from '@/components/nav/Anchor';
import NavBar from '@/components/nav/Navbar';

export default {
	name: 'LayoutHeader',
	components: {
		Fragment,
		Anchor,
		NavBar
	}
}
</script>

<style scoped>
.btn--skip {
	background-color: var(--bodyColor);
	color: var(--bodyBg);
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
