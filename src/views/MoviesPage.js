import axios from 'axios'
import { React, Component } from 'react'
import MoviesList from '../components/MoviesList/MoviesList'

export default class MoviesPage extends Component {
    state = {
        inputValue: '',
        movies: []
    }

    componentDidMount() {
        const { search } = this.props.location

        if (search) {
            axios.get(`https://api.themoviedb.org/3/search/movie${search}&api_key=a4de692f1b0678dfae28764090f39212&language=en-US&page=1`).then(response => this.setState({ movies: response.data.results }))
        }
    }


    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputValue}&api_key=a4de692f1b0678dfae28764090f39212&language=en-US&page=1`).then(response => this.setState({ movies: response.data.results, inputValue: '' }))

        this.props.history.push({
            ...this.props.location,
            search: `query=${this.state.inputValue}`
        })

    }


    render() {
        return (
            <>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </form>
                <MoviesList movies={this.state.movies} />
            </>
        )
    }

}