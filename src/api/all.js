import axios from './main';

const getAllData = async () => {
  const { data } = await axios.get('/all');
  return data;
};

export default getAllData;
