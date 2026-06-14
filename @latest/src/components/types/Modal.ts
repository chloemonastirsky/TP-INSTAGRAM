import type { DogPost } from "./Post";
export type ModalProps = {
  post: DogPost | null
  onCerrar: () => void
}