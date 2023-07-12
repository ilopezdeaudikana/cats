import pagesReducer, { setActive, changeCategory, setTotalPages } from './pagination.slice'
import { settings } from '../../../config'

describe('pages reducer', () => {
  const initialState = { pages: settings.initialState.pages }

  it('should handle initial state', () => {
    expect(pagesReducer(undefined, { type: 'unknown' })).toEqual(initialState.pages)
  })

  it('should set active page', () => {
    const actual = pagesReducer(initialState.pages, setActive(75))
    expect(actual.active).toEqual(75)
  })
  it('should set change category', () => {
    const actual = pagesReducer(initialState.pages, changeCategory('cats'))
    expect(actual.query).toEqual('cats')
  })
  it('should set total pages', () => {
    const actual = pagesReducer(initialState.pages, setTotalPages(600))
    expect(actual.total).toEqual(600)
  })
})
