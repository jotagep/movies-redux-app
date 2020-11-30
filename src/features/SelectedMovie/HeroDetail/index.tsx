import React from 'react'
import { getImage, MovieInfo } from 'api/movieApi'

import HeroMovie from 'components/HeroMovie'
import FavoriteBox from 'features/FavoriteMovies/FavoriteBox'

import style from './style.module.scss'
import { getBudget } from 'utils'

type Props = {
  movie: MovieInfo
}

export default function HeroDetail({
  movie
}: Props) {

  return (
    <section>
      <HeroMovie classContainer="w-full -mt-32 relative" movie={movie}>
        <div className="flex rounded-lg bg-darkgray bg-opacity-75">
          <div className="flex-initial">
            <img 
              className={style.poster}
              src={getImage(movie.poster_path, 'w500')} 
              alt={`Poster of ${movie.original_name}`} 
            />
          </div>
          <div className="flex-1 px-12 py-8">
            <span className="text-sm text-gray-400">{movie.release_date}</span>
            <h2 className="font-lead text-4xl">{movie.title}</h2>
            <ul className="flex mb-4">
            {movie.genres.map((item, i) => (
              <li key={i} className="text-sm mr-2 rounded px-2 py-1 border border-white">
                {item.name}
              </li>
            ))}
            </ul>
            <p className="mb-4">{movie.overview}</p>
            <span className="block mb-2"><b>Duration:</b> {movie.runtime}min</span>
            <span className="block mb-2"><b>Budget:</b> {getBudget(movie.budget)}</span>
            <h4 className="font-bold text-lg mb-2">Cast:</h4>
            <ul className="text-sm grid grid-cols-4 gap-2">
              {movie.cast.slice(0,6).map((item, i) => (
                <li className="" key={i}>
                  <span className="block">{item.character || '---'}</span>
                  <span className="text-gray-500">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FavoriteBox movie={movie} className={style.favorite} />
      </HeroMovie>
    </section>
  )
}
