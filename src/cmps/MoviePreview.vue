<template>
	<article class="movie-preview">
		<img :src="posterUrl" alt="movie poster" />
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
	data() {
		return {
			posterUrl: '',
		}
	},
	async mounted() {
		if (!this.movie.posterUrl) {
			this.posterUrl = '/default.png'
			return
		}

		try {
			const res = await fetch(this.movie.posterUrl)
			if (!res.ok) this.posterUrl = '/default.png'
			else this.posterUrl = this.movie.posterUrl
		} catch (err) {
			console.error(err)
			this.posterUrl = '/default.png'
		}
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
