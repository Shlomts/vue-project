<template>
	<div v-if="movie" class="movie-details">
		<img
			:src="movie.posterUrl"
			alt="movie poster"
			onerror="this.src='../../default.png'"
		/>
		<h2 class="title">{{ movie.title }}</h2>
		<section class="info">
			<p>{{ movie.releaseYear }}</p>
			<p>{{ movie.director }}</p>
			<p>Running Time: {{ movie.runningTime }} min.</p>
			<p>{{ movie.genre }}</p>
			<ul>
				<h3>Actors</h3>
				<li v-for="actor in movie.actors">{{ actor }}</li>
			</ul>
		</section>

		<button class="app-btn get-poster" v-on:click="getPoster(movie.title)">
			>>>Bring Poster<<<
		</button>
		<RouterLink to="/movie" class="app-btn back">Back</RouterLink>
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
	grid-template-columns: 1fr 30vw;
	row-gap: 3px;
	padding: 10px;

	img {
		grid-column: 2;
		max-height: 400px;
		max-width: 300px;
		justify-self: center;
		padding-block: 15px;
	}

	.title {
		grid-row: 1;
		grid-column: 1;
		text-transform: capitalize;
		font-weight: bold;
		font-size: xx-large;
	}

	.info {
		grid-row: 2;
		grid-column: 1;
		padding: 14px 17px;

		ul {
			padding: 0;
			list-style: none;
		}
	}

	.back {
		grid-column: 2;
		grid-row: 1;
		justify-self: end;
		max-block-size: fit-content;
	}

	.get-poster {
		grid-column: 2;
		grid-row: 3;
	}
}
</style>
