export type Breed = {
  id: number
  name: string
  temperament?: string
  bred_for?: string
  life_span?: string
  origin?: string
}

// Respuesta directa de TheDogAPI
export type DogPost = {
  id: string
  url: string
  width: number
  height: number
  breeds: Breed[]
}

// Props del componente Post
export type PostProps = {
  post: DogPost
  username?: string
  location?: string
  timeAgo?: string
  initialLikes?: number
  onImageClick?: (post: DogPost) => void  // para el Modal
}