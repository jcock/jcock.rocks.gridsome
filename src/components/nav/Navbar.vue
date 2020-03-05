<template>
	<nav class="navbar" role="navigation">
		<g-link to="/" class="brand">
			<jcock class="brand--img" />
		</g-link>

		<ol class="nav">
			<li><g-link class="link" to="/">Work</g-link></li>
			<li><g-link class="link" to="/about/">About</g-link></li>
		</ol>
	</nav>
</template>

<script>
import Jcock from '~/assets/img/brand/jcock.svg';

export default {
	name: 'NavBar',
	components: {
		Jcock
	}
}
</script>

<style scoped>
.navbar {
	align-items: start;
	display: grid;
	font-size: var(--step--1);
	grid-gap: var(--step-0);
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: var(--step-6);
	padding: var(--step-0) var(--step-3);

	@media screen and (min-width: 54rem) {
		font-size: var(--step--2);
	}
}

.nav {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.link {
	color: #fff;
	display: block;
	opacity: 0.5;
	padding: calc(var(--step-0) / 2) 0;
	transition: opacity var(--timingBase) ease-in-out;

	@media screen and (min-width: 54rem) {
		display: inline-block;
		padding: calc(var(--step-0) / 4) 0;
	}

	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}
}

.brand {
	color: #fff;
	display: block;
	margin-top: 1rem;
	opacity: 0.5;
	transition: opacity var(--timingBase) ease-in-out;
	width: var(--step-6);

	@media screen and (min-width: 54rem) {
		margin-top: 0.65rem;
		width: var(--step-3);
	}

	& .o,
	& .c2,
	& .k {
		opacity: 0;
		transform: translateY(10%);
		transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
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
			transform: translateY(0);
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
