import React from 'react';
import ContentLoader from 'react-content-loader';

const SelectSectionLoading = () => (
  <ContentLoader
    width={'100%'}
    height={40}
    backgroundColor='#999999'
    foregroundColor='#eeeeee'>
    <rect x='0' y='10' rx='4' ry='4' width={'90%'} height='25' />
  </ContentLoader>
);

export default SelectSectionLoading;
