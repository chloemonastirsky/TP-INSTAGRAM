import React, { useState } from 'react'
import type { Profile } from '../types/Profile'
import './Post.css'

const Story: React.FC<Profile> = ({
  storyId,
  username,
  avatarUrl
}) => {
  
  
    return (
    <div className="story-card">

        <div className="story-avatar">          
            <img src={avatarUrl} alt={`Avatar de ${username}`} className="story-avatar-img" />
        </div>

        <p className="story-username">{username}</p>
    </div>
  )
}   

export default Story