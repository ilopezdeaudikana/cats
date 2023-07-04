import { call, put, takeLatest } from 'redux-saga/effects'
import { setGifs } from './gifs.slice'
import { settings } from '../../../config'
import { Gif } from '../../../types/gif.type'
import { setTotalPages } from '../pagination/pagination.slice'

const getUrl = (query: string, page: number) => {
  const { limit } = settings.initialState.pages
  const offset = page * parseInt(limit)

  const queryString = settings.queryString
    .replace('${query}', query)
    .replace('${limit}', limit)
    .replace('${offset}', offset.toString())
  return settings.url + queryString
}
export const GIFS_FETCH_REQUESTED = 'GIFS_FETCH_REQUESTED'

export const api = {
  loadGifs(cat: string, page: number): any {
    const url = getUrl(cat, page)
    return fetch(url)
      .then((gifs) => gifs.json())
      .then((gifs) => gifs)
  }
}

function* fetchGifs(action: any): Generator<any, any, any> {
  const { cat, page } = action.payload
  try {
    const gifs: { data: Gif[], pagination: { total_count: number } } = yield call(api.loadGifs, cat, page)
    yield put(setGifs(gifs.data))
    yield put(setTotalPages(Math.ceil(gifs.pagination.total_count/parseInt(settings.initialState.pages.limit))))

  } catch (e: any) {
    console.log(e)
    yield put({ type: 'GIFS_FETCH_FAILED', message: e.message })
  }
}

/*
  Starts fetchGifs on each dispatched `GIFS_FETCH_REQUESTED` action.
  Allows concurrent fetches of gifs.
*/
function* gifsSaga() {
  yield takeLatest(GIFS_FETCH_REQUESTED, fetchGifs)
}

export default gifsSaga
