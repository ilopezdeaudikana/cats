import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import gifsReducer from './slices/gifs/gifs.slice'
import gifsSaga from './slices/gifs/gifs.saga'
import paginationReducer from './slices/pagination/pagination.slice'

// import scoreReducer from './slices/score-slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    gifs: gifsReducer,
    pagination: paginationReducer,
    // score: scoreReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  }
});

sagaMiddleware.run(gifsSaga);
