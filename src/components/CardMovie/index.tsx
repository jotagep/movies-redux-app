import React from 'react'
import { Link } from 'react-router-dom'
import { getImage, Movie } from 'api/movieApi'

import style from './style.module.scss'
import RatingBox from 'components/RatingBox'
import FavoriteBox from 'features/FavoriteMovies/FavoriteBox'

type Props = {
  movie: Movie,
}

export default function CardMovie({
  movie,
}: Props) {

  if (!movie) {
    return <span>Loading...</span>
  }

  return (
    <Link to={`/movies/${movie.id}`} className={style.card}>
      <RatingBox className={style.rating} rate={movie.vote_average} />
      <FavoriteBox movie={movie} className={style.favorite} />
      {movie.backdrop_path ? (
        <img src={getImage(movie.backdrop_path, 'w500')} alt={movie.title} className={style.image} />
      ): (
        <img src={getImage(movie.poster_path, 'w500')} alt={movie.title} className={style.image} />
      )}
    </Link>
  )
}