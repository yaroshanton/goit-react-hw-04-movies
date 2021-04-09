import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'
import routes from './routes'

export default class componentName extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </>
    )
  }
};