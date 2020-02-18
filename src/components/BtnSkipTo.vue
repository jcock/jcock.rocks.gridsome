<template>
	<a :href="to" :tabindex="tabindex" class="btn btn--skip-to sr-focusable">
		<slot>{{ text }}</slot>
	</a>
</template>

<script>
export default {
	name: 'BtnSkipTo',
	props: {
		text: {
			type: String,
			default: 'Skip to main content'
		},
		to: {
			type: String,
			default: '#main'
		},
		tabindex: {
			type: [Number, null],
			default: null
		}
	}
}
</script>
