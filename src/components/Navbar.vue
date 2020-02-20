<template>
	<nav class="navbar" role="navigation">
		<g-link to="/" class="brand">
			<jcock class="brand--img" />
		</g-link>

		<ol class="nav">
			<li><g-link class="nav__link" to="/">Home</g-link></li>
			<li><g-link class="nav__link" to="/about/">About</g-link></li>
		</ol>
	</nav>
</template>

<script>
import Jcock from '~/assets/img/brand/jcock.svg';

export default {
	name: 'Navbar',
	components: {
		Jcock
	}
}
</script>

<style scoped>
.navbar {
	align-items: center;
	display: grid;
	grid-template-columns: 1fr auto;
	justify-content: space-between;
	margin-bottom: 1rem;
	padding: 1rem var(--step-3);
}

.nav {
	align-items: center;
	display: flex;
	justify-content: space-between;
	list-style-type: none;
	margin: 0;
	padding: 0;

	& li {
		margin: 0 0.5rem;
	}
}

.brand {
	color: #fff;
	display: block;
	opacity: 0.5;
	transition: opacity var(--transitionTimingBase) ease-in-out;
	width: var(--step-4);

	& .o,
	& .c2,
	& .k {
		opacity: 0;
		transition: opacity 100ms ease-in-out;
	}

	& .o {
		transition-delay: 150ms;
	}

	& .c2 {
		transition-delay: 75ms;
	}

	& .k {
		transition-delay: 1ms;
	}

	&:hover,
	&:active,
	&:focus {
		opacity: 1;

		& .o,
		& .c2,
		& .k {
			opacity: 1;
		}

		& .o {
			transition-delay: 1ms;
		}

		& .k {
			transition-delay: 150ms;
		}
	}
}
</style>
