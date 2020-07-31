const API_BACKEND_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://bubbleflixx.herokuapp.com';

export default {
  API_BACKEND_URL,
};
