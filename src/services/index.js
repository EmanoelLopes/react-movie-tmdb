
import axios from 'axios';
import config from 'utils/config';

const endpoints = {
  movie: {
    topRated: '/movie/top_rated',
    popular: '/movie/popular',
    nowPlaying: '/movie/now_playing',
    upComing: 'movie/upcoming',
    current: '/movie'
  },
  tv: {
    topRated: '/tv/top_rated',
    popular: '/tv/popular',
    discover: '/tv/discover',
    current: '/tv',
    onTheAir: 'tv/on_the_air',
  },
  credits: '/credits',
};

const defaultLanguage = 'en-US';

const currentLanguage = (localStorage.getItem('current_language') !== null)
  ? localStorage.getItem('current_language')
  : localStorage.setItem('current_language', defaultLanguage);

const params = {
  api_key: config.REACT_APP_MOVIE_DB_API_KEY,
  language: currentLanguage,
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
  currentLanguage,
};
