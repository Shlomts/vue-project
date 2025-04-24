<template>
	<article class="movie-preview">
		<img
			:src="movie.posterUrl"
			alt="movie poster"
			onerror="this.src='../../default.png'"
		/>
		<section class="details">
			<h3>{{ movie.title }}</h3>
			<p>{{ movie.releaseYear }}</p>
		</section>
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
	display: grid;
	grid-template-columns: 1fr min-content;
	min-height: 24vh;

	img {
		max-height: 70px;
		display: flex;
		justify-self: end;
		grid-column: 2;
	}

	.details {
		grid-column: 1;
		grid-row: 1;

		h3 {
			font-size: 1.5rem;
			font-weight: bold;
			text-transform: capitalize;
		}
	}
}
</style>
