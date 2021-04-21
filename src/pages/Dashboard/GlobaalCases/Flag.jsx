import React from 'react';
import styled from 'styled-components';

const Flag = ({ src }) => {
  return <StyledFlag src={src} className='DropDown' />;
};
const StyledFlag = styled.img`
  width: 30px;
  margin-right: 0.5rem;
  height: 100%;
`;
export default Flag;
