import { React, Component } from 'react'
import { fetchMoviesCast } from '../services/MoviesApi'
import '../styles/Cast.scss'

export default class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        fetchMoviesCast(movieId).then(res => this.setState({ cast: res.data.cast }))
    }


    render() {
        const { cast } = this.state
        return (
            <>
                {cast.map(res =>
                    <li className='CastLink' key={res.cast_id}>
                        <img src={`https://image.tmdb.org/t/p/w500${res.profile_path}`} alt={res.name} width={120} />
                        <p>{res.name}</p>
                        <p>{res.character}</p>
                    </li>
                )
                }
            </>
        )
    }
}