import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import { PaginationComponent } from "./PaginationComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gitAllaction } from "../redux/action/moviesAction";
import { useEffect } from "react";

export const Movieslist = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gitAllaction());
  }, []);
  const datamovies = useSelector((state) => state.movies);
  // const datapage = useSelector((state) => state.page);

  useEffect(() => {
    setMovies(datamovies);
   
  }, [datamovies]);
  return (
    <Row className="mt-5 d-flex justify-content-center">
      {movies.length >= 1 ? (
        movies.map((move) => {
          return <CardMovie key={move.id} move={move} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}
      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};
