import React, { useState } from "react";

import ReactPaginate, { ReactPagingtion } from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { gitpageApi } from "../redux/action/moviesAction";
import { useEffect } from "react";

export const PaginationComponent = () => {
  const [totelpage, settotelpage] = useState(0);

  const dispatch = useDispatch();
  const numberpage = useSelector((state) => state.page);

  useEffect(() => {
    settotelpage(numberpage);
  }, []);

  const handlePageClick = (data) => {
    dispatch(gitpageApi(data.selected + 1));
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      pageCount={numberpage}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="myactive active"
    />
  );
};
