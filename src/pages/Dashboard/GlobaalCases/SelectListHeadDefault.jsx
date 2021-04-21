import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';

const SelectListHead = () => {
  return (
    <Head>
      <Heading>
        COVID-19 <Updated>Updated 5 mins ago</Updated>
      </Heading>
      <DropDown />
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  border-bottom: 1px solid #fff;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
`;

const Updated = styled.span`
  font-size: 0.45em;
  margin-top: 0.5rem;
  font-weight: normal;
`;

export default SelectListHead;
