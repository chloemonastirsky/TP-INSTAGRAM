import React from 'react'
import type { ProfileProps } from '../types/Profile';
import './Profile.css'

const Profile: React.FC<ProfileProps> = ({ posts, onSelectPost }) => {
	const userProfile = {
		username: 'dog_lover_2026',
		avatar: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
		fullName: 'Firulais & Co.',
		bio: 'Explorando el mundo, un ladrido a la vez. 🐾 Amante de las caminatas largas y las APIs estables. Creador de contenido canino.',
		followers: '12.4K',
		following: '482',
	}

	return (
		<div className="profile-container">
			<header className="profile-header">
				<div className="profile-avatar-container">
					<img
						className="profile-avatar"
						src={userProfile.avatar}
						alt={`Foto de perfil de ${userProfile.username}`}
					/>
				</div>

				<section className="profile-info">
					<div className="profile-username-row">
						<h2>{userProfile.username}</h2>
						<button className="edit-profile-btn">Editar perfil</button>
					</div>

					<ul className="profile-stats">
						<li>
							<strong>{posts?.length ?? 0}</strong> publicaciones
						</li>
						<li>
							<strong>{userProfile.followers}</strong> seguidores
						</li>
						<li>
							<strong>{userProfile.following}</strong> seguidos
						</li>
					</ul>

					<div className="profile-bio">
						<h1>{userProfile.fullName}</h1>
						<p>{userProfile.bio}</p>
					</div>
				</section>
			</header>

			<hr className="profile-divider" />

			<div className="profile-grid">
				{posts && posts.map((post) => (
					<div
						key={post.id}
						className="profile-grid-item"
						onClick={() => onSelectPost(post)}
					>
						<img
							className="profile-grid-image"
							src={post.url}
							alt="Publicación de perrito"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Profile
