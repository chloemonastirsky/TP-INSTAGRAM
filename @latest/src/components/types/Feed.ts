import type { DogPost } from "./Post";

export type FeedProps = {
  posts: DogPost[]
  onVerDetalle: (post: DogPost) => void
}