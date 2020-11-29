import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Movie } from 'api/movieApi'
import { toggleFavorite } from './favoriteMoviesSlice'
import HeartIcon from './HeartIcon'
import { RootState } from 'app/rootReducer'

type Props = {
  movie: Movie,
  className?: string
}

export default function FavoriteBox({ movie, className = '' }: Props) {

  const dispatch = useDispatch()
  const isFavorite = useSelector((state: RootState) => state.favoriteMovies.movies[movie.id])
  
  const handleClick = (e: any) => {
    e.preventDefault()
    dispatch(toggleFavorite(movie))
  } 

  return (
    <div className={className} onClick={handleClick}>
      <HeartIcon isFavorite={isFavorite !== undefined} />
    </div>
  )
}
