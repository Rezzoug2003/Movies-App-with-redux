import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import man from "../images/man.jpeg"

const CardMovie = ({ move }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-0 mb-3">
      <Link to={`/Movies/${move.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + move.poster_path}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {move.original_title}</p>
              <p>تاريخ الاصدار:{move.release_date}</p>
              <p>عدد المقيمين:{move.vote_count}</p>
              <p>التقييم:{move.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
