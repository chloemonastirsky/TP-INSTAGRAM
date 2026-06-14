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
    onVerDetalle: (post: { id: string; url: string }) => void;

}

export type ProfileEdit = {
    
}