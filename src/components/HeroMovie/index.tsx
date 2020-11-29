import React from 'react'
import { getImage, Movie } from 'api/movieApi'

import style from './style.module.scss'
import Container from 'components/Container'
import ButtonLink from 'components/ButtonLink'

type Props = {
  movie: Movie,
  pretitle?: string
}

export default function HeroMovie({
  movie,
  pretitle = ''
}: Props) {

  if (!movie) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={`${style.hero} flex items-center h-screen relative`}>
      <img src={getImage(movie.backdrop_path, 'original')} alt={`Background from ${movie.title}`} className={style.image} />
      <Container className="z-10 w-1/2">
      {pretitle && (<span className="mr-4 text-lg">{pretitle}</span>)}
      <h2 className="text-title font-lead">{movie.title}</h2>
      <p className="mb-6">{movie.overview}</p>
      <ButtonLink to={`/movies/${movie.id}`}>
        See More
      </ButtonLink>
      </Container>
    </div>
  )
}