import axiosInstance from '../modules/axios/axios';

const newsService = () => {
  const getNews = () => axiosInstance.get('/');

  return {
    getNews,
  };
};

export default newsService;
