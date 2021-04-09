import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import routes from '../../routes'

const MoviesList = ({ movies, location }) => (
    <>
        <ul>{movies.map(film => (
            <li key={film.id}><Link to={{
                pathname: `${routes.movies}/${film.id}`,
                state: { from: location }
            }
            }>{film.original_title}</Link></li>
        ))}</ul>
    </>
)

export default withRouter(MoviesList);

// withRouter не нужен, так как компонент используется на нескольких страницах