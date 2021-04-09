import React, { Component } from 'react'
import axios from 'axios'
import MoviesList from '../components/MoviesList/MoviesList'

class HomePage extends Component {
    state = {
        films: []
    }

    async componentDidMount() {
        const movies = await axios.get(`http://api.themoviedb.org/3/trending/movie/week?api_key=a4de692f1b0678dfae28764090f39212`)
            .then(res => res)

        this.setState({ films: movies.data.results })
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
