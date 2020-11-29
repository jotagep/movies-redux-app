import React, { useRef, useEffect, useCallback} from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { RootState } from 'app/rootReducer'
import { fetchPopularMovies } from './popularMoviesSlice'

import Spinner from 'components/Spinner'

export default function LoadMore() {

  const { isLoading, pagesLoaded } = useSelector((state: RootState) => state.popularMovies, shallowEqual)

  const loader = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const loadMore = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      !isLoading && dispatch(fetchPopularMovies(pagesLoaded+1))
    }
  }, [isLoading, pagesLoaded, dispatch])

  useEffect(() => {
    if (!isLoading && pagesLoaded === 0) {
      dispatch(fetchPopularMovies())
    }
  }, [isLoading, pagesLoaded, dispatch])

  useEffect(() => {
    let current:Element
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(loadMore, options)

    if (loader && loader.current) {
      current = loader.current
      observer.observe(current)
    }

    return () => {
      current && observer.unobserve(current)
    }
  }, [loader, loadMore])

  return (
    <div className="h-16 flex justify-center" ref={loader}>
      {isLoading && (
        <Spinner />
      )}
    </div>
  )
}
