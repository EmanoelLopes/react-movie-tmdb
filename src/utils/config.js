const KEYS = [
  'REACT_APP_BASE_URL',
  'REACT_APP_LOGIN_URL',
  'NODE_ENV',
  'PUBLIC_URL',
  'REACT_APP_ACCESS_CONTROL',
  'REACT_APP_TOKEN',
  'REACT_APP_MOVIE_DB_API_KEY',
  'REACT_APP_MOVIE_DB_API',
];

/* eslint-disable-next-line no-undef */
const config = Object.entries(process.env).reduce((acc, [key, value]) => {
  const keyName = KEYS.find(item => key.includes(item));
  if (keyName) return { ...acc, [keyName]: value };
  return acc;
}, {});

export default { ...config };
