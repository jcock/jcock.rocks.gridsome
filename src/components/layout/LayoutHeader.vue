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
	background-color: var(--black);
	color: var(--white);
	left: 0;
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

	&:focus {
		box-shadow: 0.2rem 0.2rem 0 0 var(--focusColor);
	}
}
</style>
