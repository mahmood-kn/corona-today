import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PageList from './PageList';

const Pagination = ({ first, last, total }) => {
  const countries = useSelector((state) => state.countries);
  return (
    <StyledPagination>
      <Showing>
        Showing {first + 1} to {last} of {total} entries
      </Showing>
      <PageList />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 95%;
`;

const Showing = styled.h3`
  color: #fff;
`;

export default Pagination;
