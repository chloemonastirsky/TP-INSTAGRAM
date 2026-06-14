import type { DogPost } from "./Post";

export type PostItem = {
  id: string
  url: string
}
export type StoryProps = {
  post: DogPost
  username: string
  vista?: boolean   // si ya fue vista o no (cambia el color del anillo)
}