<template>
	<g-link to="/" class="brand" aria-label="JCOCK">
		<jcock class="brand--img" />
	</g-link>
</template>

<script>
import Jcock from '@/assets/img/brand/jcock.svg';

export default {
	name: 'Brand',
	components: {
		Jcock
	}
}
</script>

<style scoped>
.brand {
	box-sizing: content-box;
	color: var(--navLinkColor);
	display: block;
	margin-top: 0.5rem;
	opacity: 0.5;
	transition: box-shadow var(--timingBase) var(--easePrimary), opacity var(--timingBase) var(--easePrimary);
	transform: translateX(-0.5rem);
	width: var(--step-6);
	padding: 0.5rem;

	@media screen and (min-width: 54rem) {
		margin-top: 0.4rem;
		width: var(--step-3);
	}

	& .o,
	& .c2,
	& .k {
		opacity: 0;
		transform: translateY(10%);
		transition: opacity 100ms var(--easePrimary), transform 100ms var(--easePrimary);
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

	&:focus {
		box-shadow: 0.125rem 0.125rem 0 0 var(--focusColor);
	}
}
</style>
