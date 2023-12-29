import { ALLMOVIES, MoviesApi } from "../types/moviesType";
import axios from "axios";

export const gitAllaction = () => {
  return async (dispatch) => {
    const res = await axios.get(MoviesApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      page: res.data.total_pages,
    });
  };
};
export const gitMoviesSearsh = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      page: res.data.total_pages,
    });
  };
};
export const gitpageApi = (page) => {
  return async (dispatch) => {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`
      );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      page: res.data.total_pages,
    });
  };
};
