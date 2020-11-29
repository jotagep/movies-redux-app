import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  to: string
  className?: string
  hasActiveClassName?: boolean
}

export default function ButtonLink({children, to, className = '', hasActiveClassName = false}: Props) {

  return (
    <NavLink
      to={to}
      className={`text-white font-normal border border-white px-4 py-2 rounded 
        hover:bg-netflix hover:border-netflix transition-colors duration-200 
        ease-out ${className}`}
      {...hasActiveClassName && {activeClassName: 'bg-netflix border-netflix'}}
      exact
    >
      {children}
    </NavLink>
  )
}
