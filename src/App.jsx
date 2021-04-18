import React, { useEffect } from 'react';
import axios from './api/main';

const App = () => {
  useEffect(() => {
    axios
      .get('/all')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Covid 19</h1>
    </div>
  );
};

export default App;
