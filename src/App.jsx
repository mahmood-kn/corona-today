import React, { useEffect } from 'react';
import axios from './api/main';
import Dashboard from './pages/Dashboard/Dashboard';
import Map from './pages/Map/Map';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    axios
      .get('/all')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <Route path='/' exact component={Dashboard} />
      <Route path='/map' component={Map} />
    </Router>
  );
};

export default App;
