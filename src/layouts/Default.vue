<template>
	<main id="main" class="main" itemprop="mainEntity">
		<slot/>
	</main>
</template>

<style scoped>
.main {
	margin: 0 var(--step-3);
}

.btn--skip {
	left: 1rem;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 0;
	z-index: 9999;
}

.btn--top {
	opacity: 0.33;
	transition: color var(--transitionTimingBase) ease-in-out, opacity var(--transitionTimingBase) ease-in-out;

	&:hover,
	&:active,
	&:focus {
		opacity: 1;
	}
}
</style>
