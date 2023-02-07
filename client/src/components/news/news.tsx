import { useEffect, useState } from 'react';
import { Article } from '../../App';
import newService from '../../service/news';
import searchService from '../../service/search';

interface Props {
  articles: Article[];
  isLoading: any;
}

function News({ articles, isLoading }: Props) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-5 h-[57vh] col-span-10  border-black mt-[20px]">
      {articles?.slice(0, 5).map((article, index) => (
        <div
          key={index}
          className="border-r-[1px] border-black overflow-hidden first:first-line:uppercase first:first-line:tracking-widest
          first:first-letter:text-7xl first:first-letter:font-bold first:first-letter:text-slate-900
          first:first-letter:mr-3 first:first-letter:float-left"
        >
          <div className="mx-[5%]">
            <a href={article.url}>
              <p
                className={`py-[10px] ${
                  index % 2 === 0
                    ? 'text-[16px] italic'
                    : 'text-[14px] uppercase font-[700]'
                }`}
              >
                {article.title}
              </p>
            </a>
          </div>
          {index % 2 === 0 && (
            <img
              src={article.image}
              alt={article.title}
              className="grayscale pt-[10px] p-2 m-auto"
            />
          )}
          <p className="leading-5 p-3 font-medium break-all text-[11px]">
            {article.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default News;
