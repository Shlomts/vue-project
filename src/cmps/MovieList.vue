<template>
	<section class="movie-list">
		<ul>
			<li v-for="movie in movies" :key="movie._id">
				<MoviePreview :movie="movie" />
				<div class="actions">
					<RouterLink :to="`movie/${movie._id}`" class="app-btn"
						>Details</RouterLink
					>
					<RouterLink :to="`movie/edit/${movie._id}`" class="app-btn"
						>Edit</RouterLink
					>
					<a class="app-btn delete" @click="onRemoveMovie(movie._id)"
						>x</a
					>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
import MoviePreview from './MoviePreview.vue'

export default {
	props: {
		movies: {
			type: Array,
			required: true,
		},
	},
	methods: {
		onRemoveMovie(movieId) {
			this.$emit('remove', movieId)
		},
	},
	components: {
		MoviePreview,
	},
}
</script>

<style lang="scss" scoped>
.movie-list ul {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 10px;

	padding: 0;
	list-style: none;

	li {
		display: grid;
		border-radius: 6px;

		padding: 10px;
		background-color: rgb(167, 0, 0);
		color: rgb(245, 166, 166);
	}

	.actions {
		display: flex;
		gap: 5px;
		bottom: 2px;
		justify-content: space-around;
		align-items: end;

		.delete {
			border-radius: 50%;
			cursor: pointer;
		}
	}
}
</style>
