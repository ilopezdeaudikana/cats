import React from 'react'
import { Gif } from '../../../types/gif.type'
import ModalImage from 'react-modal-image'

export default function GifThumbnail(props: { gif: Gif }) {

  const { gif } = props

  return (
    <div key={gif.slug} className='thumbnail'>
      <ModalImage
        small={gif.images.fixed_height_still.url}
        large={gif.images.original.url}
        hideDownload={true}
        hideZoom={true}
        alt={gif.title}
      />
    </div>
  )
}
