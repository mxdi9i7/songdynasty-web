import React from 'react';

export default function RoomTitle({ title, setTitle }) {
	return (
		<div>
			<label>房间标题： </label>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				name='title'
			/>
		</div>
	);
}
