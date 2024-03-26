const API_KEY = "86783762237ff3e97be67f3473685c59";
const BASE_PATH = "https://api.themoviedb.org/3";

export const getTrending = async (type) =>
  await (await fetch(`${BASE_PATH}/trending/${type}/day?api_key=${API_KEY}`)).json();

export const getUpcoming = async () =>
  await (await fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&with_genres=16`)).json();

export const getTrailerVideo = async (type, id) =>
  await (await fetch(`${BASE_PATH}/${type}/${id}/videos?api_key=${API_KEY}`)).json();

export const getMovieImage = (path, format) => `https://image.tmdb.org/t/p/${format ? format : "original"}${path}`;

export const getGenres = async (type) =>
  await (await fetch(`${BASE_PATH}/genre/${type}/list?api_key=${API_KEY}`)).json();

export const searchAPI = (type, title) => `${BASE_PATH}/search/${type}?api_key=${API_KEY}&query=${title}`;

export const posterAPI = (type, id) => `${BASE_PATH}/discover/${type}?api_key=${API_KEY}&with_genres=${id}`;

const getDetail = async (type, id) => await (await fetch(`${BASE_PATH}/${type}/${id}?api_key=${API_KEY}`)).json();
/* end utils function */