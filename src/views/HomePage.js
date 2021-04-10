import React, { Component } from 'react'
import MoviesList from '../components/MoviesList/MoviesList'
import { fetchTrendMovies } from '../services/MoviesApi'

class HomePage extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        fetchTrendMovies().then(res => this.setState({ films: res.data.results }))
    }

    render() {
        const { films } = this.state
        return (
            <>
                <h1>Trending Today</h1 >
                <MoviesList movies={films} />
            </>
        )
    }
}
export default HomePage;
