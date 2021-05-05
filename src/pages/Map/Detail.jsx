import React from 'react';
import styled from 'styled-components';

const Detail = ({ heading, value }) => {
  return (
    <Container>
      <h4>{heading}</h4>
      <Number>{value}</Number>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  border-bottom: 1px solid #b7b7b7;
  width: 70%;
`;
const Number = styled.span`
  font-size: 2.4em;
  margin: 0.5rem 0 1rem 0;
`;

export default Detail;
