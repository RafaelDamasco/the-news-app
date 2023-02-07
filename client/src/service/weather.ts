import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_TOKEN;
console.log(API_KEY);

const weatherService = (lat: number, lon: number) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};

export default weatherService;
