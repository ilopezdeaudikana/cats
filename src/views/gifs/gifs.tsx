import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GIFS_FETCH_REQUESTED } from '../../store/slices/gifs/gifs.saga'

import './gifs.component.css'
import GifThumbnail from './thumbnail/gif-thumbnail.component'
import { Gif } from '../../types/gif.type'
import { settings } from '../../config'

import PaginationComponent from '../../common/pagination/pagination.component'
import Nav from '../../common/nav/nav.component'

function Gifs() {
  
  const gifs: Gif[] = useSelector((state: any) => state.gifs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GIFS_FETCH_REQUESTED, payload: { cat: settings.categories[0], page: 1 } })
  }, [dispatch])

  return (
    <>
      <Nav />
      <section className='gifs'>
        {gifs.map((gif:Gif) => (
          <article
            key={gif.id}
            className='gif'
          >
            { <GifThumbnail gif={gif} /> }
          </article>
        ))}
      </section>
      <PaginationComponent />
    </>
  )
}

export default Gifs
