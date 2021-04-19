import React from 'react';
import styled from 'styled-components';
import redImg from '../../../assets/img/corona-icon-red.png';
import greenImg from '../../../assets/img/corona-icon-green.png';
import { numberWithCommas } from '../../../utils/funcs';

const DetailsCard = ({ text, data, green, change }) => {
  return (
    <Card>
      <CardImg src={green ? greenImg : redImg} />
      <div>
        <CardHeader>{text}</CardHeader>
        <CardContent>
          {numberWithCommas(data)}
          <Change>
            ({change > 0 ? '+' : change < 0 ? '-' : ''}
            {numberWithCommas(change)})
          </Change>
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
  display: inline-block;
`;

const CardHeader = styled.h3`
  font-weight: normal;
  font-size: 1em;
  white-space: nowrap;
  margin-bottom: 0.3rem;
`;

export default DetailsCard;
