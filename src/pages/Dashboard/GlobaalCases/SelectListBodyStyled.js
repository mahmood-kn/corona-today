import styled from 'styled-components';

export const Statistics = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Confirmed = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ConfirmedH = styled.h4`
  color: #fff;
  margin-bottom: 1rem;
  font-weight: normal;
`;

export const ConfirmedB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
export const Death = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeathH = styled.h4`
  color: #f87d7d;
  margin-bottom: 1rem;
  font-weight: normal;
`;

export const DeathB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
export const Recovered = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RecoveredH = styled.h4`
  color: #5bcc75;
  margin-bottom: 1rem;
  font-weight: normal;
`;

export const RecoveredB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
export const Loading = styled.span`
  font-size: 0.6em;
`;
