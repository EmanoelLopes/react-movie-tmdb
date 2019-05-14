
import axios from 'axios';
import config from 'utils/config';

const endpoints = {
  currentMovie: '/movie',
  currentTVserie: '/tv',
  discover: {
    movie: '/discover/movie',
    tv: '/discover/tv',
  },
  popular: {
    movies: '/movie/popular',
    tv: '/tv/popular',
    person: '/person/popular'
  },
};

const params = {
  api_key: config.REACT_APP_MOVIE_DB_API_KEY,
  language: 'en-US',
  page: 1,
};

const instance = axios.create({
  baseURL: config.REACT_APP_MOVIE_DB_API,
  params: { ...params },
});

export {
  endpoints,
  params,
  instance,
};
