import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Gif } from '../../../types/gif.type'

export const gifsSlice = createSlice({
  name: 'cats/gifs',
  initialState: [] as Gif[],
  reducers: {
    setGifs(state: Gif[], action: PayloadAction<Gif[]>) {
      return [...action.payload]
    }
  }
})

export const { setGifs } = gifsSlice.actions
export default gifsSlice.reducer