import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchMovie = (id) => API.get(`/movies/${id}`);
export const fetchMovies = (page) => API.get(`/movies?page=${page}`);
export const fetchMoviesBySearch = (searchQuery, page) => API.get(`/movies/search?page=${page}&searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags  || 'none'}&language=${searchQuery.language}`);
export const fetchMoviesByTags = (searchQuery, page) => API.get(`/movies/category?page=${page}&searchQuery=${searchQuery.search || 'none'}&actors=${searchQuery.actors  || 'none'}&year=${searchQuery.year}&director=${searchQuery.director}&country=${searchQuery.country}&production=${searchQuery.production}`);
export const fetchMoviesByCreator = (creatorName) => API.get(`/movies/creator?name=${creatorName}`);
