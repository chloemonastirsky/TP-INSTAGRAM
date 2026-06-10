import React from 'react'
import type { SidebarProps } from '../types/SideBar'
import './SideBar.css'

const SideBar: React.FC<SidebarProps> = ({ currentUser, suggestions }) => {
	return (
		<aside className="sidebar">
			<div className="sidebar-user">
				<img
					className="sidebar-avatar"
					src={currentUser.avatarUrl}
					alt={`${currentUser.username} avatar`}
				/>

				<div className="sidebar-user-info">
					<strong>{currentUser.username}</strong>
					<span className="sidebar-fullname">{currentUser.fullName}</span>
				</div>

				<button className="sidebar-switch">Switch</button>
			</div>

			<div className="sidebar-suggestions">
				<div className="suggestions-header">
					<span>Suggestions for you</span>
					<button className="see-all">See All</button>
				</div>

				<ul className="suggestions-list">
					{suggestions && suggestions.length > 0 ? (
						suggestions.map((s) => (
							<li key={s.id} className="suggestion-item">
								<img className="suggestion-avatar" src={s.avatarUrl} alt={s.username} />
								<div className="suggestion-info">
									<strong>{s.username}</strong>
									<span className="suggestion-reason">{s.reason}</span>
								</div>
								<button className="follow-btn">Follow</button>
							</li>
						))
					) : (
						<li className="suggestion-empty">No suggestions yet</li>
					)}
				</ul>
			</div>

			<footer className="sidebar-footer">
				<p className="sidebar-links">About · Help · Press · API · Jobs · Privacy · Terms · Locations</p>
				<p className="sidebar-copyright">© 2023 INSTAGRAM FROM META</p>
			</footer>
		</aside>
	)
}

export default SideBar
