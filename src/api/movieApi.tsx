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

export interface MovieDetailed extends Movie {
  release_date: string
  tagline: string
  runtime: string
  relase_date: string
  budget: number
  revenue: number
  genres: {
    id: number
    name: string
  }[]
}
export interface Cast {
  name: string
  character: string
}

export interface MovieInfo extends MovieDetailed {
  related_movies: Movie[]
  cast: Cast[]
}
interface IResponse {
  total_pages: number
  results: Movie[]
  total_results: number
  page: number
}

interface IResponseCast {
  id: number
  cast: Cast[]
}

export const getImage = (url: string, size: 'original'|'w500' = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${url}`
}

export const getPopularMovies = async (page = 1):Promise<Movie[]> => {
  const query = `${url}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`

  const response = await axios.get<IResponse>(query)
  return response.data.results
}

export const getDetailMovie = async (id: number): Promise<MovieDetailed> => {
  const query = `${url}/movie/${id}?api_key=${API_KEY}&language=${language}`
  const response = await axios.get<MovieDetailed>(query)

  return response.data
}

export const getRelatedMovies = async (id: number): Promise<Movie[]> => {
  const query = `${url}/movie/${id}/recommendations?api_key=${API_KEY}&language=${language}`
  const response = await axios.get<IResponse>(query)

  return response.data.results
}

export const getCastMovie = async (id: number): Promise<Cast[]> => {
  const query = `${url}/movie/${id}/credits?api_key=${API_KEY}&language=${language}`
  const response = await axios.get<IResponseCast>(query)

  return response.data.cast
}

export const getSearchMovie = async (text: string): Promise<Movie[]> => {
  const query = `${url}/search/movie?api_key=${API_KEY}&language=${language}&query=${text}`
const response = await axios.get<IResponse>(query)

  return response.data.results
}