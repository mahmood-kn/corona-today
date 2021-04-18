import axios from 'axios';

const covid = axios.create({
  baseURL: 'https://disease.sh/v3/covid-19',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default covid;
