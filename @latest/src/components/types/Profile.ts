import type { DogPost } from "./Post";

export type Profile = {
    usuario: string;
    seguidos: number;
    seguidores: number;
    fotoPerfil: string;
    bio: string;
}
export type PostItem = {
    id: string | number
    url: string
    [key: string]: any
}

export type ProfileProps = {
    posts: PostItem[]
    onSelectPost: (post: PostItem) => void
     onVerDetalle: (post: DogPost) => void

}

export type ProfileEdit = {
    
}