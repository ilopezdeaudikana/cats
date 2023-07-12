import { Gif } from '../../../types/gif.type'
import gifsReducer, { setGifs } from './gifs.slice'

describe('gifs reducer', () => {
  const initialState = { gifs: [] }

  it('should handle initial state', () => {
    expect(gifsReducer(undefined, { type: 'unknown' })).toEqual([])
  })

  it('should handle new gifs', () => {
    const gifs: Gif[] = [
      {
        id: '123',
        title: 'dummy title',
        images: {
          fixed_height_still: {
            url: 'dummy url'
          },
          original: {
            height: 50,
            width: 60,
            url: 'dummy original url'
          }
        },
        slug: 'dummy slug'
      }
    ]

    const actual = gifsReducer(initialState.gifs, setGifs(gifs))
    expect(actual).toEqual([...gifs])
  })
})
