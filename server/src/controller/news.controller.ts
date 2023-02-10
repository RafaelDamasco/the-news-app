import { Request, Response } from 'express';
import { news, search } from '../api';
import { cache } from '../middlewares/verify-cache.middleware';

export const getNews = async (req: Request, res: Response) => {
  try {
    res.send(await news());
  } catch (error: unknown) {
    console.error(error);
    res.send(error);
  }
};

export const searchNews = async (req: Request, res: Response) => {
  try {
    const q = (req.query as { q: string }).q!;
    const searcbInAttribute = (req.query as { in: string }).in;
    const lang = (req.query as { lang: string }).lang;
    const sortBy = (req.query as { sortby: string }).sortby;

    // if (!q) {
    //   console.log('You must provide a search term');
    //   return res.send({ error: 'You must provide a search term' });
    // }

    cache.set(q, await search(q, searcbInAttribute, lang, sortBy));
    res.send(await search(q, searcbInAttribute, lang, sortBy));
  } catch (error: unknown) {
    console.error(error);
    res.send(error);
  }
};
