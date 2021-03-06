import axios from './main';

export const getAllData = async () => {
  const { data } = await axios.get('/all');
  return data;
};

export const yesterdayData = async () => {
  const { data } = await axios.get('/all?yesterday=1');
  return data;
};
export const countries = async () => {
  const { data } = await axios.get('/countries');
  return data;
};
export const timeSeriesCountry = async (country, duration) => {
  const { data } = await axios.get(
    `/historical/${country}?lastdays=${duration}`
  );
  return data;
};
