import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_MOVIE, FETCH_BY_TAGS } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, movies: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        movies: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      case FETCH_BY_TAGS:
    case FETCH_BY_CREATOR:
        return { ...state, movies: action.payload.data };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.movie };
    
    default:
      return state;
  }
};

