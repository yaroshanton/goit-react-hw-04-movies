import React, { Component, Suspense, lazy } from 'react'
import { fetchMoviesDetails } from '../services/MoviesApi'
import { Link, Route } from 'react-router-dom'
// import Cast from '../components/Cast'
// import Reviews from '../components/Reviews'
import routes from '../routes'
import '../styles/MovieDetailsPage.scss'

const Cast = lazy(() =>
    import('../components/Cast.js' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
    import('../components/Reviews.js' /* webpackChunkName: "Reviews" */),
);

export default class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        original_title: '',
        popularity: '',
        overview: '',
        genres: [],

    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        fetchMoviesDetails(movieId).then(res => this.setState({ ...res.data }))
    }

    handleGoBack = () => {
        const { history, location } = this.props

        if (location.state && location.state.from) {
            return history.push(location.state.from)
        }

        history.push(routes.home)
    }


    render() {
        const { poster_path, original_title, popularity, overview, genres } = this.state
        const { url, path } = this.props.match
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                <div className='Details'>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="320" alt={original_title} />
                    <div className='DetailsInfo'>
                        <h1>{original_title}</h1>
                        <p>User Score: {Math.round(popularity)}</p>
                        <p>Overview</p>
                        <p>{overview}</p>
                        <p>Genres</p>
                        <ul>
                            {genres.map(genre =>
                                <li className='GenreLink' key={genre.id}>{genre.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Additional Information</p>
                    <ul>
                        <li className='BottomLink'><Link className='BottomLinkAnchor' to={`${url}/cast`}>Cast</Link></li>
                        <li className='BottomLink'><Link className='BottomLinkAnchor' to={`${url}/reviews`}>Reviews</Link></li>
                    </ul>
                </div>
                <Suspense fallback={<h1>Загружаем...</h1>}>
                    <Route path={`${path}/cast`} component={Cast}></Route>
                    <Route path={`${path}/reviews`} component={Reviews}></Route>
                </Suspense>
            </>
        )
    }
}