import { combineReducers } from '@reduxjs/toolkit'

import popularMoviesSlice from 'features/PopularMovies/popularMoviesSlice'
import favoriteMoviesSlice from 'features/FavoriteMovies/favoriteMoviesSlice'

const rootReducer = combineReducers({
  popularMovies: popularMoviesSlice,
  favoriteMovies: favoriteMoviesSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer