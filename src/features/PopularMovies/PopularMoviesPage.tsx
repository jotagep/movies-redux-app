import React from 'react'

import HeroPopularMovie from './HeroPopularMovie'
import GridPopularMovies from './GridPopularMovies'
import LoadMore from './LoadMore'

export default function FavoriteMoviesPage() {

  return (
    <div>
     <HeroPopularMovie />
     <GridPopularMovies />
     <LoadMore />
    </div>
  )
}
