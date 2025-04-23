import { storageService } from './async-storage.service.js'
import { loadFromStorage, saveToStorage } from './util.service.js'

import demoData from './movie.data.js'

const KEY = 'movies'

_createMovies()

export const movieService = {
	query,
	get,
	remove,
	save,
	getEmptyMovie,
    getMoviePoster,
}

async function query(filterBy = {}) {
	var movies = await storageService.query(KEY)

	if (filterBy.txt) {
		const regex = new RegExp(filterBy.txt, 'i')
		movies = movies.filter(movie => regex.test(movie.title) || regex.test(movie.director) || regex.test(movie.actors))
	}
	if (filterBy.maxRuntime) {
		movies = movies.filter(movie => movie.runningTime <= filterBy.maxRuntime)
	}
	return movies
}

async function get(id) {
	return storageService.get(KEY, id)
}

async function remove(id) {
	return storageService.remove(KEY, id)
}

async function save(movie) {
	if (movie._id) return storageService.put(KEY, movie)
	else return storageService.post(KEY, movie)
}

function getEmptyMovie() {
	return {
		title: '',
		director: '',
		posterUrl: '', 
		runningTime: 90,
		releaseYear: 1999,
		actors: [], 
		genre: '', 
	}
}

async function getMoviePoster(title) {
	const API_KEY = '3d3d6cb'

	const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`)
    const data = await res.json()
    
    if (data.Response === 'True') {
        return data.Poster
    } else {
        return '../../default.png'
    }
}

function _createMovies() {
	var movies = loadFromStorage(KEY)
	if (movies && movies.length) return

	saveToStorage(KEY, demoData)
}
