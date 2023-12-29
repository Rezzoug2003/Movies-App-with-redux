import { ALLMOVIES } from "../types/moviesType";

const insialvalue = {
  movies: [],
  page: 0,
};
export const moviesReducer = (state=insialvalue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data,page:action.page };
    default:
      return state;
  }
};
