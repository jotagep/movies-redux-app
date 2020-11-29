import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'app/rootReducer'
import { fetchPopularMovies } from './popularMoviesSlice'

import HeroMovie from 'components/HeroMovie'

export default function FavoriteMoviesPage() {

  const dispatch = useDispatch()
  const { movies, pagesLoaded } = useSelector((state: RootState) => state.popularMovies)

  useEffect(() => {
    if (pagesLoaded === 0) {
      dispatch(fetchPopularMovies())
    }
  }, [pagesLoaded, dispatch])

  const [mostPopular, ...restMovies] = movies
  console.log(mostPopular, restMovies)

  return (
    <div>
     <HeroMovie movie={mostPopular} pretitle="Most popular at the moment" />
    </div>
  )
}
