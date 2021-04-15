import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import routes from '../../routes'
import './MoviesList.scss'

const MoviesList = ({ movies, location }) => (
    <ul className='MoviesList'>{movies.map(film => (
        <li className='LinkAnchor' key={film.id}><Link className='Link' to={{
            pathname: `${routes.movies}/${film.id}`,
            state: { from: location }
        }
        }>{film.original_title}</Link></li>
    ))}
    </ul>
)

export default withRouter(MoviesList);

// withRouter не нужен, так как компонент используется на нескольких страницах