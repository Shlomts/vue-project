<template>
	<div v-if="movie" class="movie-details">
		<img
			:src="movie.posterUrl"
			alt="movie poster"
			onerror="this.src='../../default.png'"
		/>
		<h2>{{ movie.title }}</h2>
		<p>{{ movie.director }}</p>
		<p>{{ movie.releaseYear }}</p>
		<p>Running Time: {{ movie.runningTime }} min.</p>
		<p>{{ movie.genre }}</p>
		<ul>
			<h3>Actors</h3>
			<li v-for="actor in movie.actors">{{ actor }}</li>
		</ul>
		<button v-on:click="getPoster(movie.title)">>>>Bring Poster<<<</button>
		<RouterLink to="/movie"><button>Back</button></RouterLink>
	</div>
</template>

<script>
import { movieService } from '@/services/movie.service.js'

export default {
	data() {
		return {
			movie: null,
			posterUrl: '',
		}
	},
	methods: {
		async getPoster(title) {
			const poster = await movieService.getMoviePoster(title)
			this.movie.posterUrl = poster
			movieService.save(this.movie)
		},
	},
	async created() {
		const { id: movieId } = this.$route.params
		this.movie = await movieService.get(movieId)
	},
}
</script>

<style lang="scss">
.movie-details {
	display: grid;

	padding: 10px;
	background-color: rgb(254, 211, 130);
	ul {
		padding: 0;
		list-style: none;
	}

	a {
		justify-self: end;
	}
}
</style>
