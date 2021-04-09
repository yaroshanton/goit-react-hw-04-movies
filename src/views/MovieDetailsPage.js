import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'

export default class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        original_title: '',
        popularity: '',
        overview: '',
        genres: [],

    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        const movie = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}?api_key=a4de692f1b0678dfae28764090f39212`)

        this.setState({ ...movie.data })
    }



    render() {
        const { poster_path, original_title, popularity, overview, genres } = this.state
        const { url, path } = this.props.match
        return (
            <>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="320" alt={original_title} />
                    <div>
                        <h1>{original_title}</h1>
                        <p>User Score: {Math.round(popularity)}</p>
                        <p>Overview</p>
                        <p>{overview}</p>
                        <p>Genres</p>
                        <ul>
                            {genres.map(genre =>
                                <li key={genre.id}>{genre.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Additional Information</p>
                    <ul>
                        <li><Link to={`${url}/cast`}>Cast</Link></li>
                        <li><Link to={`${url}/reviews`}>Reviews</Link></li>
                    </ul>
                </div>

                <Route path={`${path}/cast`} component={Cast}></Route>
                <Route path={`${path}/reviews`}>{Reviews}</Route>
            </>
        )
    }
}