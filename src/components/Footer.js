import React from 'react'

export default function Footer() {
	return (
		<footer className='info'>
			<p>Double-click to edit a todo</p>
			<p>Click 'Urgent!' to make task a priority</p>
			<p>
				Created by <a href='http://github.com/jacob-ebey/'>jacob-ebey</a>
			</p>
			<p>
				Updated by <a href='https://github.com/tharwin-carr'>tharwin-carr </a>
				<span>
					<a href='https://www.linkedin.com/in/tharwin-carr/'>
						<img
							className='linkedin'
							src='https://img.icons8.com/ios-filled/12/000000/linkedin.png'
							alt='LinkedIn'
						/>
					</a>
				</span>
			</p>

			<p>
				Part of <a href='http://todomvc.com'>TodoMVC</a>
			</p>
		</footer>
	)
}
