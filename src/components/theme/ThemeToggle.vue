<template>
	<button
		:aria-label="`Theme mode set to ${themeDark ? 'dark' : 'light'}`"
		:aria-pressed="themeDark"
		class="toggle"
		@click.prevent="toggleTheme"
	>
		Theme: {{ themeDark ? 'dark' : 'light' }}
	</button>
</template>

<script>
export default {
	name: 'ThemeToggle',
	data() {
		return {
			themeDark: false
		}
	},
	methods: {
		toggleTheme() {
			this.themeDark = !this.themeDark;
			// This is using a script that is added in index.html
			window.__setPreferredTheme(
				this.themeDark ? 'dark' : 'light'
			)
		}
	},
	mounted() {
		if (window.__theme == 'dark') this.themeDark = true
	}
}
</script>

<style scoped>
.toggle {
	appearance: none;
	background-color: transparent;
	border: 0;
	color: var(--bodyColor);
	cursor: pointer;
	padding: 0;
	position: relative;
	transition: all var(--timingBase) var(--easePrimary);
}
</style>
