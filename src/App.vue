<template>
	<div>
		<layout-header />
		<transition name="fade" mode="out-in" appear>
			<router-view />
		</transition>
		<layout-footer />
	</div>
</template>

<script>
import site from '@/data/site.json';
import LayoutHeader from '@/components/layout/LayoutHeader';
import LayoutFooter from '@/components/layout/LayoutFooter';

export default {
	components: {
		LayoutHeader,
		LayoutFooter
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity var(--transitionTimingMed) ease-in-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
