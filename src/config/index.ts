import { Pagination } from '../types/page.type';

export const settings = {
  url: 'http://api.giphy.com/v1/gifs/search',
  queryString: '?api_key=qioxuNIu6nhVt3Vz4n3TSiAl8pO8PHtV&q=${query}&limit=${limit}&offset=${offset}',
  categories: ['dogs','cats'],
  initialState: {
    pages: { limit: '25', offset: '0', query: 'dogs', total: 0, active: 1 } as Pagination,
    gifs: []
  }
}