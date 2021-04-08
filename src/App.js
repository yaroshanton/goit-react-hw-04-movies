import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'

export default class componentName extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </>
    )
  }
};