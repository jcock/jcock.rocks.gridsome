<template>
	<a :href="to" :tabindex="tabindex" :class="classes">
		<slot>{{ text }}</slot>
	</a>
</template>

<script>
export default {
	name: 'ButtonAnchor',
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
			default: null,
			required: true
		},
		text: {
			type: String,
			default: null
		},
	}
}
</script>
