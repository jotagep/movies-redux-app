import { combineReducers } from '@reduxjs/toolkit'

import popularMoviesSlice from 'features/PopularMovies/popularMoviesSlice'
import favoriteMoviesSlice from 'features/FavoriteMovies/favoriteMoviesSlice'
import selectedMovieSlice from 'features/SelectedMovie/selectedMoviesSlice'

const rootReducer = combineReducers({
  popularMovies: popularMoviesSlice,
  favoriteMovies: favoriteMoviesSlice,
  selectedMovie: selectedMovieSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer