import './pagination.component.css'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../../types/page.type'
import { Gif } from '../../types/gif.type'
import { GIFS_FETCH_REQUESTED } from '../../store/slices/gifs/gifs.saga'
import { setActive } from '../../store/slices/pagination/pagination.slice'

export default function PaginationComponent() {
  const { active, query, total } = useSelector((state: { pagination: Pagination, gifs: Gif[]}) => state.pagination)
  
  const dispatch = useDispatch()
  
  const setPage = (page: number) => { 
    if (page !== 0 && page < total) {
      dispatch(setActive(page))
      dispatch( { type: GIFS_FETCH_REQUESTED, payload: { cat: query, page }})
    }
  }

  return (
    <ul className='pagination-list'>
        <li
          onClick={() => setPage(active - 1)}
        >
          <button className='pagination-link'>Previous</button>
        </li>
        <li>
          <span className='pagination-link'>{ active } of  { total }</span>
        </li>
        <li
          onClick={() => setPage(active + 1)}
        >
          <button className='pagination-link'>Next</button>
        </li>
    </ul>
  )
}
