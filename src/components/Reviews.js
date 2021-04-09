import { React, Component } from 'react'
import axios from 'axios'

class Reviews extends Component {
    state = {
        results: []
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        const res = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a4de692f1b0678dfae28764090f39212`)

        this.setState({ results: res.data.results })
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