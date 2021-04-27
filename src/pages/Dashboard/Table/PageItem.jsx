import React from 'react';
import styled from 'styled-components';

const PaginationItem = ({ children, onClick, disabled, currPage }) => {
  return (
    <PageNumber disabled={disabled} onClick={onClick} currPage={currPage}>
      {children}
    </PageNumber>
  );
};

const PageNumber = styled.li`
  display: grid;
  border: 1px solid ${(props) => (props.currPage ? 'black' : '#ccc')};
  background-color: ${(props) => (props.currPage ? 'black' : 'transparent')};
  border-radius: 2px;
  place-items: center;
  width: 25px;
  height: 25px;
  color: #fff;
  margin: 0 0.3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: black;
    border-color: black;
  }
`;

export default PaginationItem;
