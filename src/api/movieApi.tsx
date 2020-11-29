import axios from 'axios'

const API_KEY = "e0d3d49d19ce926b6842e10c9d97ba31"
const url = 'https://api.themoviedb.org/3'
const language= "en-US"

export interface Movie {
  title: string
  original_name: string
  id: number
  vote_average: number
  overview: string
  poster_path: string
  backdrop_path: string
}

interface IResponse {
  total_pages: number
  results: Movie[]
  total_results: number
  page: number
}

export const getImage = (url: string, size: 'original'|'small' = 'small') => {
  return `https://image.tmdb.org/t/p/${size}${url}`
}

export const getPopularMovies = async (page = 1):Promise<Movie[]> => {
  const query = `${url}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`

  const response = await axios.get<IResponse>(query)
  return response.data.results
}
