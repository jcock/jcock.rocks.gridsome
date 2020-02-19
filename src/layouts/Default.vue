<template>
	<div class="layout">
		<btn-skip-to />

		<header class="header">
			<strong>
				<g-link to="/">{{ $static.metadata.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link class="nav__link" to="/">Home</g-link>
				<g-link class="nav__link" to="/about/">About</g-link>
			</nav>
		</header>
		<main id="main" itemprop="mainEntity">
			<slot/>
		</main>
	</div>
</template>

<script>
import ButtonSkipTo from '@/components/ButtonSkipTo'

export default {
	components: {
		ButtonSkipTo
	}
}
</script>

<style scoped>
.layout {
  max-width: 90rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.nav__link {
  margin-left: 1rem;
}
</style>

<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>
