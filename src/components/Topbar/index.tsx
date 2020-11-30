import React from 'react'
import { Link } from 'react-router-dom'
import useScrollY from 'hooks/useScrollY'

import Container from 'components/Container'
import ButtonLink from 'components/ButtonLink'
import SearchBar from 'features/SearchMovies/SearchBar'

import style from './style.module.scss'

export default function Topbar() {
  const scroll = useScrollY()

  // Change opacity topbar
  const changeTopbar = scroll.y > 150

  return (
    <header className={`${style.header} ${changeTopbar ? style['header-full']: ''}`}>
      <Container className="h-full">
        <nav className="h-full">
          <ul className="h-full flex items-center justify-between">
            <li>
              <Link to="/">
                <span className={style.title}>Redflix</span>
              </Link>
            </li>
            <li>
              <SearchBar />
            </li>
            <li>
              <ButtonLink 
                to={"/favorites"}
                hasActiveClassName
                >
                Favorites
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
