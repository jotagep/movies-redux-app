import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'components/Loading';

//Pages 
const PopularMoviesPage = lazy(() => import('features/PopularMovies/PopularMoviesPage'))
const SelectedMoviePage = lazy(() => import('features/SelectedMovie/SelectedMoviePage'))
const FavoriteMoviesPage = lazy(() => import('features/FavoriteMovies/FavoriteMoviesPage'))

function App() {
  return (
    <div className="bg-darkgray h-screen w-screen">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <PopularMoviesPage />
          </Route>
          <Route path="/movies/:id">
            <SelectedMoviePage />
          </Route>
          <Route exact path="/favorites">
            <FavoriteMoviesPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
