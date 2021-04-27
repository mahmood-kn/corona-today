import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';
import PageItem from './PageItem';
import ArrowBtn from './ArrowBtn';

const PageList = () => {
  const countries = useSelector((state) => state.countries);
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const currPage = useSelector((state) => state.currPage);
  const [firstDisabled, setfirstDisabled] = useState(false);
  const [lastDisabled, setlastDisabled] = useState(false);
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(countries?.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(pageNumbers);
    if (currPage > 1) {
      setfirstDisabled(false);
    } else {
      setfirstDisabled(true);
    }

    if (currPage < pageNumbers[pageNumbers.length - 1]) {
      setlastDisabled(false);
    } else {
      setlastDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage, pageNumbers.length]);
  const handlePageClick = (e) => {
    dispatch(actions.changeCurrPage(Number(e.target.textContent)));
  };
  const handlePrev = (e) => {
    if (currPage > 1) {
      dispatch(actions.changeCurrPage(currPage - 1));
    }
  };
  const handleNext = (e) => {
    if (currPage < pageNumbers[pageNumbers.length - 1]) {
      dispatch(actions.changeCurrPage(currPage + 1));
    }
  };
  return (
    <Container>
      <ArrowBtn disabled={firstDisabled} onClick={handlePrev}>
        {'<'}
      </ArrowBtn>
      <Ul>
        {pageNumbers.map((n) => (
          <PageItem
            key={n}
            onClick={handlePageClick}
            currPage={currPage === n ? true : false}>
            {n}
          </PageItem>
        ))}
      </Ul>
      <ArrowBtn disabled={lastDisabled} onClick={handleNext}>
        {'>'}
      </ArrowBtn>
    </Container>
  );
};

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default PageList;
