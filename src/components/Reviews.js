import { React, Component } from 'react'
import { fetchMoviesReviews } from '../services/MoviesApi'

class Reviews extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        fetchMoviesReviews(movieId).then(res => this.setState({ results: res.data.results }))
    }


    render() {
        const { results } = this.state
        return (
            <>
                {results.length > 0 ? (<ul>
                    {results.map(res =>
                        <li key={res.id}>
                            <p>{res.author}</p>
                            <p>{res.content}</p>
                        </li>
                    )}
                </ul>) : <p>No reviews for this movie</p>}
            </>
        )
    }
}

export default Reviews;