import React from 'react';
import ContentLoader from 'react-content-loader';

const TableLoading = () => (
  <ContentLoader
    width={'100%'}
    height={550}
    backgroundColor='#999999'
    foregroundColor='#eeeeee'>
    <rect x='10' y='20' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='85' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='150' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='215' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='280' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='345' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='410' rx='10' ry='10' width={'98%'} height='50' />
    <rect x='10' y='475' rx='10' ry='10' width={'98%'} height='50' />
  </ContentLoader>
);

export default TableLoading;
