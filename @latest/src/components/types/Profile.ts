import type { DogPost } from "./Post";

export type Profile = {
    usuario: string;
    seguidos: number;
    seguidores: number;
    fotoPerfil: string;
    bio: string;
}
export type PostItem = {
    id: string
    url: string
    [key: string]: any
}

export type ProfileProps = {
  posts: DogPost[]
  onVerDetalle: (post: DogPost) => void
}

export type ProfileEdit = {
    
}