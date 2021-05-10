import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoading = () => (
  <ContentLoader
    width={'100%'}
    height={70}
    backgroundColor='#999999'
    foregroundColor='#eeeeee'>
    <rect x='0' y='10' rx='4' ry='4' width={'100%'} height='25' />
    <rect x='0' y='50' rx='4' ry='4' width={'60%'} height='15' />
  </ContentLoader>
);

export default CardLoading;
