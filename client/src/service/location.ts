import axios from 'axios';

const locationService = () => {
  return axios.get('http://ip-api.com/json/?fields=61439');
};

export default locationService;
