import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CaseByCountry = () => {
  const countries = useSelector((state) => state.countries);
  const loading = useSelector((state) => state.loading);
  return (
    <Container>
      <Head>Cases by Country</Head>
      <Ul>
        {!loading && countries !== null
          ? countries.map((c) => (
              <Li key={c.country}>
                {c.country}
                <span>{c.cases}</span>
              </Li>
            ))
          : null}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--black);
  border-radius: 0.5rem;
  width: 100%;
  height: 800px;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    max-height: 500px;
  }
`;

const Head = styled.h3`
  color: #fff;
  padding: 1rem 0;
  margin: 0 1rem;
  border-bottom: 1px solid #fff;
`;

const Ul = styled.ul`
  list-style: none;
  margin-top: 2rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
  height: 87%;

  @media only screen and (max-width: 600px) {
    height: 77%;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin: 2rem 0;
  padding: 0 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

export default CaseByCountry;
