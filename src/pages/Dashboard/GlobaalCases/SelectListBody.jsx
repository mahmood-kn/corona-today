import React from 'react';
import styled from 'styled-components';
import { numberWithCommas } from 'utils/funcs';
import { useSelector } from 'react-redux';

const SelectListBody = () => {
  const selectedData = useSelector((state) => state.selectedData);
  const loading = useSelector((state) => state.loading);
  return (
    <Statistics>
      <Confirmed>
        <ConfirmedH>Confirmed</ConfirmedH>
        <ConfirmedB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.cases)
          ) : (
            <Loading>Loading...</Loading>
          )}
        </ConfirmedB>
      </Confirmed>
      <Death>
        <DeathH>Death</DeathH>
        <DeathB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.deaths)
          ) : (
            <Loading>Loading...</Loading>
          )}
        </DeathB>
      </Death>
      <Recovered>
        <RecoveredH>Recovered</RecoveredH>
        <RecoveredB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.recovered)
          ) : (
            <Loading>Loading...</Loading>
          )}
        </RecoveredB>
      </Recovered>
    </Statistics>
  );
};

const Statistics = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

const Confirmed = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConfirmedH = styled.h4`
  color: #fff;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const ConfirmedB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
const Death = styled.div`
  display: flex;
  flex-direction: column;
`;
const DeathH = styled.h4`
  color: #f87d7d;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const DeathB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
const Recovered = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecoveredH = styled.h4`
  color: #5bcc75;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const RecoveredB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
const Loading = styled.span`
  font-size: 0.6em;
`;

export default SelectListBody;
