import React from 'react';
import styled from 'styled-components';
import redImg from '../../../assets/img/corona-icon-red.png';

const DetailsCard = () => {
  return (
    <Card>
      <CardImg src={redImg} />
      <div>
        <CardHeader>Coronavirus Casses</CardHeader>
        <CardContent>
          140,568,785 <Change>(+12,020)</Change>
        </CardContent>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: var(--black);
  color: #ccc;
  padding: 1.5rem;
`;

const CardImg = styled.img`
  width: 40px;
  height: 100%;
  margin-right: 1rem;
`;

const CardContent = styled.h1`
  font-weight: bold;
  font-size: 1.6em;
`;

const Change = styled.span`
  font-size: 0.6em;
`;

const CardHeader = styled.h3`
  font-weight: normal;
  font-size: 1em;
  white-space: nowrap;
  margin-bottom: 0.3rem;
`;

export default DetailsCard;
