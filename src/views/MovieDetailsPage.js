import React, { Component } from 'react'
import axios from 'axios'

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
        const movie = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}?api_key=a4de692f1b0678dfae28764090f39212`).then(res => res.data)

        this.setState({ ...movie })
    }



    render() {
        const { poster_path, original_title, popularity, overview, genres } = this.state
        return (
            <>
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
            </>
        )
    }
}