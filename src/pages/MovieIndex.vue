<template>
    <header>
        <MovieFilter @filter="onFilter" />
        <RouterLink to="/movie/edit"><button>Add a Movie</button></RouterLink>
    </header>
	<MovieList @remove="removeMovie" v-if="movies" :movies="movies" />
    <h2 v-else>Loading...</h2>
</template>

<script>
import MovieList from '@/cmps/MovieList.vue'
import MovieFilter from '@/cmps/MovieFilter.vue'

import { debounce } from '@/services/util.service'
import { showErrorMsg, showSuccessMsg } from '@/services/event-bus.service'

export default {
    methods: {
        async removeMovie(movieId) {
            try {
                await this.$store.dispatch({ type: 'removeMovie', movieId })
                showSuccessMsg('Movie deleted')
            } catch (err) {
                showErrorMsg('Could not delete movie')
            }
        },
        onFilter(filterBy) {
            this.$store.commit({ type: 'setFilter', filterBy })
            this.debouncedLoadMovies()        },
        async loadMovies() {
            await this.$store.dispatch({ type: 'loadMovies' })
            showSuccessMsg('Movies loaded!')
        },
    },  
	async created() {
        this.debouncedLoadMovies = debounce(this.loadMovies)
		this.loadMovies()
	},
    computed: {
        movies() { return this.$store.getters.movies }
    },
    components: {
        MovieList,
        MovieFilter,
    }
}
</script>

<style lang="scss"></style>
