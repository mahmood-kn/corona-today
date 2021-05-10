import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const SelectSectionLoading = () => (
  <ContentLoader
    width={'100%'}
    height={40}
    backgroundColor='#999999'
    foregroundColor='#eeeeee'
    style={{ margin: '0 auto' }}>
    <Rect x='0' y='10' rx='4' ry='4' width={'90%'} height='25' />
  </ContentLoader>
);

const Rect = styled.rect`
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export default SelectSectionLoading;
