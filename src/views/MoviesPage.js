import axios from 'axios'
import { React, Component } from 'react'
import MoviesList from '../components/MoviesList'

export default class MoviesPage extends Component {
    state = {
        inputValue:'',
        movies:[]
    }
    
    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a4de692f1b0678dfae28764090f39212&language=en-US&query=${this.state.inputValue}&page=1`).then(response => this.setState({movies : response.data.results, inputValue: ''}))
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
                {this.state.movies.length > 0 && <MoviesList movies={this.state.movies}/>}
            </>
        )
    }

}