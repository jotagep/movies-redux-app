import React from 'react'
import { getImage, Movie } from 'api/movieApi'

import Container from 'components/Container'
import Spinner from 'components/Spinner'

import style from './style.module.scss'

type Props = {
  movie: Movie,
  children: React.ReactNode
  classContainer?: string
}

export default function HeroMovie({
  movie,
  children,
  classContainer = ''
}: Props) {

  // Skeleton
  if (!movie) {
    return <Spinner />
  }

  return (
    <div className={`${style.hero} pt-24 flex items-center h-screen relative`}>
      <img src={getImage(movie.backdrop_path, 'original')} alt={`Background from ${movie.title}`} className={style.image} />
      <Container className={`z-10 ${classContainer}`}>
        {children}
      </Container>
    </div>
  )
}