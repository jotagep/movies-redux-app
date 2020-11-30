import React from 'react'
import { Movie } from 'api/movieApi'

import GridMovie from 'components/GridMovie'

type Props = {
  movies: Movie[]
}

export default function GridRelatedMovies({
  movies
}: Props) {

  const recommendedMovies = movies.slice(0, 4)

  return (
    <section className="-mt-20 relative" >
      <GridMovie movies={recommendedMovies} title="Recommmended Movies" />
    </section>
  )
}
