import type { DogPost } from '../types/Post'
import type { StoryProps } from '../types/Story'
import './Story.css'

const Story = ({ post, username, vista = false }: StoryProps) => {
  return (
    <div className="story">
      <div className={`story-anillo ${vista ? 'story-vista' : 'story-nueva'}`}>
        <div className="story-fondo-blanco">
          <img src={post.url} alt={`Historia de ${username}`} className="story-imagen" />
        </div>
      </div>
      <p className="story-username">{username}</p>
    </div>
  )
}

export default Story