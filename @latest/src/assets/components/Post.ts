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
  breeds?: Breed[]  // ← separar el tipo Breed es más limpio
}

export type PostSummary = {
  id: string | number
  url: string
}

// export type PropsFeed = {
//     posts: Post[];
// }
