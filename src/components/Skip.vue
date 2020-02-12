<template>
	<a :href="`${start}`" class="btn sr-focusable">
		<slot>Skip to content</slot>
	</a>
</template>

<script>
export default {
	name: 'Skip',
	props: ['start']
}
</script>
