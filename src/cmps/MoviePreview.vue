<template>
	<article class="movie-preview">
		<img :src="movie.posterUrl" alt="movie poster" />
		<h3>{{ movie.title }}</h3>
		<p>{{ movie.releaseYear }}</p>
	</article>
</template>

<script>
export default {
	props: {
		movie: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss">
.movie-preview {
	img {
		max-height: 60px;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: bold;
	}
}
</style>
