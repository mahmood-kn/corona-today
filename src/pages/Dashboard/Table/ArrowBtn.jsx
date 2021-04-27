import React from 'react';
import styled from 'styled-components';

const ArrowBtn = ({ children, onClick, disabled }) => {
  return (
    <Btn onClick={onClick} disabled={disabled}>
      {children}
    </Btn>
  );
};
const Btn = styled.button`
  display: grid;
  border: 1px solid #ccc;
  background-color: transparent;
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

  &:disabled {
    background-color: transparent;
    border-color: #666;
    color: #666;
    cursor: not-allowed;
  }
`;
export default ArrowBtn;
