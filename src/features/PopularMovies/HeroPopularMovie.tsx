import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'app/rootReducer'

import HeroMovie from 'components/HeroMovie'

export default function HeroPopularMovie() {
  const movie = useSelector((state: RootState) => state.popularMovies.movies[0], (last, next) => last.id === next.id)
  return (
    <section>
      <HeroMovie movie={movie} pretitle="Most popular at the moment" />
    </section>
  )
}
