import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_MOVIE, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_BY_TAGS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchMovie(id);

    dispatch({ type: FETCH_MOVIE, payload: { movie: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchMovies(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchMoviesBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByTags = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchMoviesByTags(searchQuery);

    dispatch({ type: FETCH_BY_TAGS, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};



export const getMoviesByCreator = (creatorName) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchMoviesByCreator(creatorName);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};