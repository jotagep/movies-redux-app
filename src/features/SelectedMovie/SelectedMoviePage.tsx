import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from 'app/rootReducer'

import { fetchDetailMovie } from './selectedMoviesSlice'
import HeroDetail from './HeroDetail'
import GridRelatedMovies from './GridRelatedMovies'
import Spinner from 'components/Spinner'

export default function SelectedMoviePage() {

  const { id } = useParams<{id: string}>()
  const { movies, isLoading } = useSelector((state: RootState) => state.selectedMovie)
  
  const dispatch = useDispatch()

  const movieInfo = movies[parseInt(id)]

  useEffect(() => {
    if (!movieInfo) {
      dispatch(fetchDetailMovie(parseInt(id)))
    }
  }, [movieInfo, id, dispatch])

  if (!movieInfo || isLoading) return <Spinner />

  return (
    <div>
      <HeroDetail movie={movieInfo} />
      <GridRelatedMovies movies={movieInfo && movieInfo.related_movies} />
    </div>
  )
}
