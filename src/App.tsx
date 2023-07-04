import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import Gifs from './views/gifs/gifs'

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div data-testid='App' className='page'>
            <Routes>
              {/* <Route path='/game' element={<Game />} />
            <Route path='/score' element={<Score />} /> */}
              <Route path='/' element={<Gifs />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  )
}

export default App
