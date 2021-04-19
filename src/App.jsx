import React, { useEffect } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Map from './pages/Map/Map';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAll } from './store/actions/mainAction';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <>
      <Route path='/' exact component={Dashboard} />
      <Route path='/map' component={Map} />
    </>
  );
};

export default App;
