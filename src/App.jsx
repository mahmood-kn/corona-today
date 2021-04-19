import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Map from './pages/Map/Map';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path='/' exact component={Dashboard} />
      <Route path='/map' component={Map} />
    </>
  );
};

export default App;
