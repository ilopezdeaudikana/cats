import './nav.component.css'
import { settings } from '../../config'
import { useState } from 'react'
import { changeCategory } from '../../store/slices/pagination/pagination.slice'
import { useDispatch } from 'react-redux'
import { GIFS_FETCH_REQUESTED } from '../../store/slices/gifs/gifs.saga'

function Nav() {
  const active = settings.categories[0]
  const categories = settings.categories
  const [category, setActiveCategory] = useState(active)

  const dispatch = useDispatch()

  const setCategory = (cat: string) => {
    dispatch(changeCategory(cat))
    dispatch( { type: GIFS_FETCH_REQUESTED, payload: { cat, page: 0 }})
    setActiveCategory(category)
  }

  return (
    <nav>
      <ul className='nav-list'>
        {categories.map((cat, index) => (
          <li key={index} className='nav-item'>
            <a onClick={() => setCategory(cat)} className={`nav-link ${cat === active ? 'active': ''}`}>
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
