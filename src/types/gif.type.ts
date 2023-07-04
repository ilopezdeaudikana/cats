export interface Gif {
  id: string
  title: string
  images: {
    fixed_height_still: {
      url: string
    }
    original: {
      height: number
      width: number
      url: string
    }
  },
  slug: string
}
