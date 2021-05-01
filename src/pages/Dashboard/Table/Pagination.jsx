import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';
import classes from './Pagination.module.css';

const Pagination = ({ first, last, total }) => {
  const countries = useSelector((state) => state.countries);
  const filteredTable = useSelector((state) => state.filteredTable);
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
        Showing {first + 1} to {last > total ? total : last} of {total} entries{' '}
        <FilteredText>
          {filteredTable?.length !== countries?.length
            ? `(filtered from ${countries?.length} total entries)`
            : ''}
        </FilteredText>
      </Showing>
      <ReactPaginate
        pageCount={filteredTable?.length / itemPerPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(c) => handlePageClick(c)}
        containerClassName={classes.PaginationContainer}
        previousLabel='<'
        nextLabel='>'
        previousClassName={classes.ArrowBtn}
        nextClassName={
          currPage === Math.ceil(filteredTable?.length / itemPerPage)
            ? classes.NextArrowBtnDisabled
            : classes.ArrowBtn
        }
        forcePage={currPage - 1}
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
  padding: 1rem;
  width: 100%;
`;

const Showing = styled.h3`
  color: #fff;
  font-weight: normal;
`;

const FilteredText = styled.span`
  font-weight: normal;
  font-size: 0.8em;
`;

export default Pagination;
