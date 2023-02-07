import axiosInstance from '../modules/axios/axios';

const searchNewsService = () => {
  const getSearchNews = (search: string, filterLang: string, sortBy: string) =>
    axiosInstance.get(
      `/search?q=${search}&in=title&lang=${filterLang}&sortby=${sortBy}`
    );

  return {
    getSearchNews,
  };
};

export default searchNewsService;
