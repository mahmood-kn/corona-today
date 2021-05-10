import React from 'react';
import styled from 'styled-components';
import DropDown from 'components/DropDownCountries/DropDown';
import { useSelector } from 'react-redux';

const SelectListHead = () => {
  const selectedData = useSelector((state) => state.selectedData);

  return (
    <Head>
      <Heading>
        COVID-19{' '}
        <Updated>
          Updated{' '}
          {selectedData !== null &&
            Math.floor(
              (new Date().getTime() - selectedData.updated) / 60000
            )}{' '}
          mins ago
        </Updated>
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
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
  @media only screen and (max-width: 600px) {
    margin: 1rem 0;
  }
`;

export default SelectListHead;
