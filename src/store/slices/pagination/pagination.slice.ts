import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Pagination } from '../../../types/page.type'
import { settings } from '../../../config'

export const pagesSlice = createSlice({
  name: 'cats/pages',
  initialState: settings.initialState.pages,
  reducers: {
    setActive(state: Pagination, action: PayloadAction<number>) {
      return { ...state, active: action.payload }
    },
    changeCategory(state: Pagination, action: PayloadAction<string>) {
      return { ...state, query: action.payload }
    },
    setTotalPages(state: Pagination, action: PayloadAction<number>) {
      return { ...state, total: action.payload}
    }
  }
})

export const { setActive, changeCategory, setTotalPages } = pagesSlice.actions
export default pagesSlice.reducer
