import {React} from 'react'
import {Link} from 'react-router-dom'

const MoviesList = ({movies}) => (
    <ul>
        {movies.map(movie => (
            <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.original_title}</Link></li>
        ))}
    </ul>
)
export default MoviesList;