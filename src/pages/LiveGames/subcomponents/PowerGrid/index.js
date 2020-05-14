import React from 'react';

export default function PowerGrid({ teams, cards, teamsColor }) {
	const getPowerLevelByTeam = (team) => {
		let numberOfTeamMember = 0;
		let filledSpots = 0;
		for (let i = 0; i < cards.length; i++) {
			const v = cards[i];
			if (v.id) {
				filledSpots++;
			}
		}
		cards.forEach((v) => {
			if (v.team === team) {
				numberOfTeamMember++;
			}
		});
		return (numberOfTeamMember / filledSpots) * 100;
	};
	return (
		<div className='power-bar'>
			{Object.entries(teams).map((teamArr, i) => {
				let filled = 0;
				cards.forEach((v) => v.id && filled++);
				const percentage = getPowerLevelByTeam(teamArr[0]);
				return (
					<div
						key={i}
						style={{
							width: `${percentage}%`,
							backgroundColor: teamsColor[teamArr[0]],
						}}
						className='bar'
					>
						{percentage > 0 ? (
							<span>
								{Math.ceil((percentage / 100) * filled)}
								{teamArr[1]}
							</span>
						) : (
							''
						)}
					</div>
				);
			})}
		</div>
	);
}
