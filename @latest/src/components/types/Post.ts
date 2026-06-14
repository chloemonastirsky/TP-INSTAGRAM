export type DogPost = {
  id: string
  url: string
  width: number
  height: number
}
 
// Un comentario simulado dentro del modal
export type Comentario = {
  id: number
  usuario: string
  texto: string
}
 
// Props del componente Post (tarjeta del feed)
export type PostProps = {
  post: DogPost
  onVerDetalle: (post: DogPost) => void   // al hacer click abre el modal
}