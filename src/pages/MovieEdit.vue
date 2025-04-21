<template>
	<form @submit.prevent="onSave" v-if="movie" class="movie-edit">
		<input v-model="movie.title" type="text" placeholder="Title" required />
		<input
			v-model="movie.director"
			type="text"
			placeholder="Director"
			required
		/>
		<input
			v-model="movie.runningTime"
			type="number"
			placeholder="Running Time"
		/>
		<input
			v-model="movie.releaseYear"
			type="number"
			placeholder="Release Year"
		/>
		<input v-model="movie.genre" type="text" placeholder="Genre" />
		<input
			v-model="movie.actors"
			type="text"
			placeholder="Actors (comma separated)"
		/>

		<div class="actions">
			<RouterLink to="/movie"
				><button type="button">Cancel</button></RouterLink
			>
			<button>Save</button>
		</div>
	</form>
</template>

<script>
import { movieService } from '@/services/movie.service.js'

export default {
	data() {
		return {
			movie: null,
		}
	},
	methods: {
		async onSave() {
			this.movie.actors.length > 0
				? (this.movie.actors = this.movie.actors.split(','))
				: []
			await movieService.save(this.movie)
			this.$router.push('/movie')
		},
	},
	async created() {
		const { id: movieId } = this.$route.params

		if (movieId) {
			this.movie = await movieService.get(movieId)
		} else {
			this.movie = movieService.getEmptyMovie()
		}
	},
}
</script>

<style lang="scss">
.movie-edit {
	display: grid;
	justify-items: start;
	gap: 0.3rem;

	padding: 10px;
	background-color: rgb(254, 211, 130);

	.actions {
		display: flex;
		gap: 0.3rem;
		justify-self: end;
	}
}
</style>
