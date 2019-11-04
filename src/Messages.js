import React from 'react'
import './Messages.css'

export default function Messages({ name, unread }) {
	const badge = <div className="unread_count badge">{unread}</div>

	return (
		<div className="messages">
			{name}
			{unread && badge}
		</div>
	)
}
