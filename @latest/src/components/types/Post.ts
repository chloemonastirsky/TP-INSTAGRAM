//razas
export type Breed = {
  name: string
  temperament?: string
  bred_for?: string
  life_span?: string
}

export type DogPost = {
  id: string
  url: string
  width?: number
  height?: number
  breeds?: Breed[]  
}

export type PostSummary = {
  id: string | number
  url: string
}

export type PropsFeed = {
    posts: DogPost[];
}
