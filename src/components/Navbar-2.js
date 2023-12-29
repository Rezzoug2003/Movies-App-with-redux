import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gitMoviesSearsh,gitAllaction } from "../redux/action/moviesAction";


export const Navbar2 = () => {
  const dispatch=useDispatch()
  const onsearsh = (word) => {
    search(word);
  };
  const search = async (word) => {
    if (word === "") {
      dispatch(gitAllaction())
    } else {
      dispatch(gitMoviesSearsh(word))
    }
  };
  return (
    <Navbar expand="lg" className=" nav-style-2" variant="dark">
      <Container>
        <Link to={"/"}>
          <img src={logo} className="logo" alt="" />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100 mt-2 search ">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="me-2 rounded-5 mt-2 mt-md-0 form-control"
              aria-label="Search"
              onChange={(e) => {
                onsearsh(e.target.value);
              }}
            />
            <i className="fa fa-search"></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
