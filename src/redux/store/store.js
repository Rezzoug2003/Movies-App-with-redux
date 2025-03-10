import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = createStore(
  moviesReducer,
  applyMiddleware(thunk),
);
