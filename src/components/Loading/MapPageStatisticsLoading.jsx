import React from 'react';
import ContentLoader from 'react-content-loader';

const MapPageStatisticsLoading = () => (
  <ContentLoader
    width={'100%'}
    height={400}
    backgroundColor='#999999'
    foregroundColor='#eeeeee'>
    <rect x='30' y='20' rx='10' ry='10' width={'40%'} height='20' />
    <rect x='30' y='60' rx='10' ry='10' width={'60%'} height='35' />
    <rect x='30' y='150' rx='10' ry='10' width={'40%'} height='20' />
    <rect x='30' y='190' rx='10' ry='10' width={'60%'} height='35' />
    <rect x='30' y='280' rx='10' ry='10' width={'40%'} height='20' />
    <rect x='30' y='320' rx='10' ry='10' width={'60%'} height='35' />
  </ContentLoader>
);

export default MapPageStatisticsLoading;
