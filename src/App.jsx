import React, { useEffect } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import MapPage from './pages/Map/MapPage';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const App = () => {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.all);
  useEffect(() => {
    dispatch(actions.getAll());
    dispatch(actions.getYesterday());
    dispatch(actions.getCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (all) {
      dispatch(actions.setSelected(all));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [all]);

  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/map' exact component={MapPage} />
      <Route path='*' component={Dashboard} />
    </Switch>
  );
};

export default App;
