import { useCallback, useEffect, useMemo, useState } from 'react';
import News from './components/news/news';
import Pagination from './components/pagination/pagination';
import Search from './components/search/search';
import Sort from './components/sort/sort';
import './global.css';
import searchNewsService from './service/search';
import Language from './components/language/language';
import locationService from './service/location';
import weatherService from './service/weather';

export interface Article {
  title: string;
  description?: string;
  content: string;
  url?: string;
  image?: string;
  publishedAt?: Date;
  source?: {
    name?: string;
    url?: string;
  };
}

export interface SearchFields {
  lang: string;
  q: string;
  sortBy: string;
}

interface Location {
  city: string;
  regionName: string;
  lat: number;
  lon: number;
}
interface Weather {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

function conversosCtoK(kel: number) {
  const conversionC = kel - 273;
  return conversionC;
}

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchFields, setSearchFields] = useState<SearchFields>({
    lang: '',
    q: '',
    sortBy: '',
  });
  const [location, setLocation] = useState<Location>({
    city: '',
    regionName: '',
    lat: 0,
    lon: 0,
  });
  const [weather, setWeather] = useState<Weather>({
    main: { temp: 0 },
    weather: [{ description: '', icon: '' }],
  });
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date();

  useEffect(() => {
    const getLocation = async () => {
      const { data: locationData } = await locationService();
      setLocation(locationData);
      const { data: weatherData } = await weatherService(
        location.lat,
        location.lon
      );
      setWeather(weatherData);
    };
    getLocation();
    // getWeather();
  }, []);

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setSearchFields((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [searchFields]
  );

  // async function loadNews() {
  //   const { data } = await newsService().getNews();
  //   setArticles(data.articles);
  //   setIsLoading(false);
  // }
  // useEffect(() => {
  //   loadNews();
  // }, []);

  const newsSearch = useCallback(
    async (searchFields: SearchFields) => {
      const { data } = await searchNewsService().getSearchNews(
        searchFields.q,
        searchFields.lang,
        searchFields.sortBy
      );
      setArticles(data.articles);
    },
    [articles]
  );

  useEffect(() => {
    setArticles([
      {
        title:
          "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
        description:
          "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
        content:
          'Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]',
        url: 'https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800',
        image:
          'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg',
        publishedAt: new Date('2022-09-28T08:14:24Z'),
        source: {
          name: 'PhoneArena',
          url: 'https://www.phonearena.com',
        },
      },
      {
        title:
          "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
        description:
          "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
        content:
          'Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]',
        url: 'https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800',
        image:
          'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg',
        publishedAt: new Date('2022-09-28T08:14:24Z'),
        source: {
          name: 'PhoneArena',
          url: 'https://www.phonearena.com',
        },
      },
      {
        title:
          "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
        description:
          "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
        content:
          'Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]',
        url: 'https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800',
        image:
          'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg',
        publishedAt: new Date('2022-09-28T08:14:24Z'),
        source: {
          name: 'PhoneArena',
          url: 'https://www.phonearena.com',
        },
      },
      {
        title:
          "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
        description:
          "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
        content:
          'Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]',
        url: 'https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800',
        image:
          'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg',
        publishedAt: new Date('2022-09-28T08:14:24Z'),
        source: {
          name: 'PhoneArena',
          url: 'https://www.phonearena.com',
        },
      },
      {
        title:
          "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
        description:
          "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
        content:
          'Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]',
        url: 'https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800',
        image:
          'https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg',
        publishedAt: new Date('2022-09-28T08:14:24Z'),
        source: {
          name: 'PhoneArena',
          url: 'https://www.phonearena.com',
        },
      },
    ]);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-[90%] max-h-[90%] min-w-[90%] min-h-[90%] bg-[##f9f7f1] shadow-[0px_10px_25px_5px_rgba(0,0,0,0.26)] p-5 shadow-slate-800 flex flex-col">
        <div className="flex content-center h-full justify-between items-center pb-5 px-10">
          <div className="w-[12%] border-black border-[3px] border-double p-[8px] flex flex-col items-center justify-center">
            {weather.weather[0].description && weather.main.temp ? (
              <>
                <span className="italic text-[10px]">
                  {weather.weather[0].description.toLocaleUpperCase()}
                </span>
                <img
                  className="grayscale w-10"
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt=""
                />
                <span className="italic  text-[12px]">
                  {conversosCtoK(weather.main.temp).toFixed() + ' Celsius'}
                </span>
              </>
            ) : (
              'Loading...'
            )}
          </div>
          <h1 className="font-[900] ml-24 text-[80px] uppercase font-playFair">
            The News
          </h1>
          <Search
            newsSearch={newsSearch}
            handleChange={handleChange}
            searchFields={searchFields}
          />
        </div>
        <div className="border-solid border-y-[1px] text-[12px] font-semibold p-1 border-black flex items-center justify-center uppercase">
          {location.regionName && location.city ? (
            <p>
              {location.regionName}, {location.city}, {date.toDateString()}
            </p>
          ) : (
            'Loading...'
          )}
        </div>
        <div className="grid grid-cols-12  overflow-hidden">
          <News articles={articles} isLoading={isLoading} />
          <div className="col-span-2 mt-[20px]">
            <Sort handleChange={handleChange} />
            <Language handleChange={handleChange} />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
