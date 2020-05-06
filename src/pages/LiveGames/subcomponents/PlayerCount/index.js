import React from 'react';

export default function PlayerCount({
	setPlayerCount,
	handleRolesUpdate,
	playerCount,
}) {
	return (
		<div>
			<select
				onChange={(e) => {
					const newCount = +e.target.value;
					setPlayerCount(newCount);
					handleRolesUpdate(newCount);
				}}
				name='playerCount'
				value={playerCount}
			>
				<option value='9'>9</option>
				<option value='10'>10</option>
				<option value='11'>11</option>
				<option value='12'>12</option>
				<option value='10'>13</option>
				<option value='11'>14</option>
				<option value='12'>15</option>
			</select>
			<label>人局</label>
		</div>
	);
}
