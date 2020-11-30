import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getDetailMovie, getCastMovie, getRelatedMovies, MovieInfo } from 'api/movieApi'
import { AppThunk } from 'app/store'

interface SelectedMoviesState {
  movies: {
    [id: number]: MovieInfo
  }
  isLoading: boolean
  error: string | null
}

const initialState: SelectedMoviesState = {
  movies: {},
  isLoading: false,
  error: null,
}

function startLoading(state: SelectedMoviesState) {
  state.isLoading = true
}

function loadingFailed(state: SelectedMoviesState, { payload }: PayloadAction<string>) {
  state.isLoading = false
  state.error = payload
}

const selectedMovies = createSlice({
  name: 'selectedMovies',
  initialState: initialState,
  reducers: {
    getSelectedMovieStart: startLoading,
    getSelectedMovieSuccess: (state: SelectedMoviesState, { payload }: PayloadAction<MovieInfo>) => {
      state.isLoading = false
      state.movies = {...state.movies, [payload.id]: payload}
      state.error = null
    },
    getSelectedMovieFailure: loadingFailed
  }
})

export const { getSelectedMovieStart, getSelectedMovieSuccess, getSelectedMovieFailure } = selectedMovies.actions

export default selectedMovies.reducer

export const fetchDetailMovie = (id: number): AppThunk => async dispatch => {
  try {
    dispatch(getSelectedMovieStart())
    const [movie, cast, related] = await Promise.all([
      getDetailMovie(id),
      getCastMovie(id),
      getRelatedMovies(id)
    ]) 
    const movieInfo: MovieInfo = {
      ...movie,
      cast: cast,
      related_movies: related
    }
    dispatch(getSelectedMovieSuccess(movieInfo))
  } catch (error) {
    dispatch(getSelectedMovieFailure(error.message))
  }
}

