import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';
import classes from './Pagination.module.css';

const Pagination = ({ first, last, total }) => {
  const countries = useSelector((state) => state.countries);
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const currPage = useSelector((state) => state.currPage);
  const dispatch = useDispatch();
  const handlePageClick = (c) => {
    dispatch(actions.changeCurrPage(c.selected + 1));
    if (c.selected === Math.ceil(countries?.length / itemPerPage)) {
    }
  };

  return (
    <StyledPagination>
      <Showing>
        Showing {first + 1} to {last > total ? total : last} of {total} entries
      </Showing>
      <ReactPaginate
        pageCount={countries?.length / itemPerPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(c) => handlePageClick(c)}
        pageClassName={classes.PageItem}
        containerClassName={classes.PaginationContainer}
        previousLabel='<'
        nextLabel='>'
        previousClassName={classes.ArrowBtn}
        nextClassName={
          currPage === Math.ceil(countries?.length / itemPerPage)
            ? classes.NextArrowBtnDisabled
            : classes.ArrowBtn
        }
        activeClassName={classes.Active}
        disabledClassName={classes.ArrowBtnDisabled}
        pageLinkClassName={classes.PageLink}
      />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 95%;
`;

const Showing = styled.h3`
  color: #fff;
`;

export default Pagination;
