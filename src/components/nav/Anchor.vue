<template>
	<a href="#" v-scroll-to="`${to}`" :tabindex="tabindex" :class="classes">
		<slot>{{ text }}</slot>
	</a>
</template>

<script>
export default {
	name: 'Anchor',
	props: {
		classes: {
			type: String,
			default: 'btn'
		},
		tabindex: {
			type: [Number, null],
			default: null
		},
		to: {
			type: String,
			default: '#',
			required: true
		},
		text: {
			type: String,
			default: null
		},
	}
}
</script>
