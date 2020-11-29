import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Movie } from 'api/movieApi'

interface FavoriteMoviesState {
  movies: {
    [idMovie: number]: Movie
  }
}

const initialState: FavoriteMoviesState = {
  movies: {}
}


const favoritePage = createSlice({
  name: 'favoriteMovies',
  initialState: initialState,
  reducers: {
    toggleFavorite: (state: FavoriteMoviesState, { payload }: PayloadAction<Movie>) => {
      if (state.movies[payload.id]) {
        delete state.movies[payload.id]
      } else {
        state.movies = {...state.movies, [payload.id]: payload }
      }
    }
  }
})

export const { toggleFavorite } = favoritePage.actions

export default favoritePage.reducer

