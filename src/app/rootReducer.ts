import { combineReducers } from '@reduxjs/toolkit'
import popularMoviesSlice from 'features/PopularMovies/popularMoviesSlice'

const rootReducer = combineReducers({
  popularMovies: popularMoviesSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer