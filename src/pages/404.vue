<template>
	<Layout>
		<h1>Oh no!</h1>
   	<h2>You broke it. Quick, head <g-link to="/">home</g-link> before someone sees.</h2>
	</Layout>
</template>

<script>
export default {
	name: 'Error 404',
	metaInfo: {
		title: 'Page not found'
	}
}
</script>
