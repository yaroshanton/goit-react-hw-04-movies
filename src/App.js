import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
// import HomePage from './views/HomePage'
// import MoviesPage from './views/MoviesPage'
// import MovieDetailsPage from './views/MovieDetailsPage'
import routes from './routes'

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
    </Suspense>
  </>
)

export default App;