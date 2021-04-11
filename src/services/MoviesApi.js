import axios from 'axios'

export function fetchTrendMovies() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a4de692f1b0678dfae28764090f39212`)
        .then(res => res)
}

export function fetchMoviesDetails(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a4de692f1b0678dfae28764090f39212`)
        .then(res => res)
}

export function fetchCurrentMovies(search) {
    return axios.get(`https://api.themoviedb.org/3/search/movie${search}&api_key=a4de692f1b0678dfae28764090f39212&language=en-US&page=1`)
        .then(res => res)
}

export function fetchMoviesByQuery(inputValue) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=a4de692f1b0678dfae28764090f39212&language=en-US&page=1`)
}

export function fetchMoviesCast(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a4de692f1b0678dfae28764090f39212`)
}

export function fetchMoviesReviews(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a4de692f1b0678dfae28764090f39212`)
}


