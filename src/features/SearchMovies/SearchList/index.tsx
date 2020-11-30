import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from 'app/rootReducer'

import style from './style.module.scss'
import RatingBox from 'components/RatingBox'
import { getImage } from 'api/movieApi'

export default function SearchList() {
  const { movies, isFocused } = useSelector((state: RootState) => state.searchMovie, shallowEqual)

  const show = isFocused && movies.length > 0
  if (show) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }

  return (
    <div className={`${style.list} ${show ? 'block': 'hidden'}`}>
      <ul className="text-darkgray">
        {movies.map((item, i) => (
          <li className="border-b border-gray-200 hover:bg-gray-200" key={i}>
            <Link to={`/movies/${item.id}`} className="flex justify-between items-center py-4 px-8">
              <div className="flex items-center">
                <img className="h-12" src={getImage(item.poster_path, 'w500')} alt={`Poster ${item.title}`} />
                <span className="font-bold text-lg ml-8">{item.title}</span>
              </div>
              <RatingBox className="text-white w-10 h-10" rate={item.vote_average} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
