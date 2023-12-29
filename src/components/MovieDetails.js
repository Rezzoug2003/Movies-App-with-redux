import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const [move,setmove]=useState([])
  const id = useParams();
  const gitmovie = async  () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    setmove(res.data)
    console.log(res.data)
  }
  //get  movie by details

  useEffect(() => {
  gitmovie()
},[])
  

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex flex-coum align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + move.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {move.original_title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم :{move.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {move.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم :{move.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom ">لقصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story  fs-4">{move.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={move.homepage} >
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
