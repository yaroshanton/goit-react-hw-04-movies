import { React, Component } from 'react'
import { fetchCurrentMovies, fetchMoviesByQuery } from '../services/MoviesApi'
import MoviesList from '../components/MoviesList/MoviesList'

export default class MoviesPage extends Component {
    state = {
        inputValue: '',
        movies: []
    }

    componentDidMount() {
        const { search } = this.props.location
        if (search) { fetchCurrentMovies(search).then(res => this.setState({ movies: res.data.results })) }
    }


    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { inputValue } = this.state

        fetchMoviesByQuery(inputValue).then(res => this.setState({ movies: res.data.results, inputValue: '' }))

        this.props.history.push({
            ...this.props.location,
            search: `query=${inputValue}`
        })

    }


    render() {
        const { inputValue, movies } = this.state
        return (
            <>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                </form>
                {movies && <MoviesList movies={movies} />}
            </>
        )
    }

}