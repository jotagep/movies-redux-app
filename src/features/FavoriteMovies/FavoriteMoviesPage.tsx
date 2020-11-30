import { RootState } from 'app/rootReducer'
import Container from 'components/Container'
import GridMovie from 'components/GridMovie'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export default function FavoriteMoviesPage() {

  const movies = useSelector((state: RootState) => state.favoriteMovies.movies, shallowEqual)

  const arrayMovies = Object.values(movies)

  return (
    <section className="pt-24">
      <Container>
        <h1 className="text-2xl mb-8">Favorite Movies</h1>
      </Container>
      {arrayMovies.length < 1 ? 
      (
        <Container>
          <div className="flex items-center justify-center py-20 rounded-lg border border-gray-800">
            <span className="text-lg">You don't have favorite movies yet</span>
          </div>
        </Container>
      )
      : 
      (
        <GridMovie movies={arrayMovies} />
      )}
    </section>
  )
}
