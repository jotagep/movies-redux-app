import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'app/rootReducer'
import { fetchPopularMovies } from './popularMoviesSlice'

export default function FavoriteMoviesPage() {

  const dispatch = useDispatch()
  const { isLoading, movies, pagesLoaded } = useSelector((state: RootState) => state.popularMovies)

  useEffect(() => {
    if (pagesLoaded === 0) {
      dispatch(fetchPopularMovies())
    }
  }, [pagesLoaded, dispatch])

  console.log(isLoading, movies)

  return (
    <div className="text-white text-lg text-center">
      {isLoading ? 'Hola': 'Adios'}
    </div>
  )
}
