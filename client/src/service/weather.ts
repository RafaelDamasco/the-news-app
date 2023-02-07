import axios from 'axios';

const API_KEY = '5676c236db3eff32a4e30659c2a70437';
const lon = -48.4976;
const lat = -27.6147;

const weatherService = (lat: number, lon: number) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};

export default weatherService;
