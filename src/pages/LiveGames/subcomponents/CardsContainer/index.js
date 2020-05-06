import React from 'react';

export default function CardsContainer({
	cards,
	handleRemoveRole,
	teamsColor,
	teams,
}) {
	return (
		<div className='cards-container'>
			{cards.map((card, i) => (
				<div className='card'>
					{card.id ? (
						<div className='card-content'>
							<button
								className='delete-button'
								onClick={(e) => handleRemoveRole(e, card)}
							>
								x
							</button>
							<div
								class='arrow-right'
								style={{ backgroundColor: teamsColor[card.team] }}
							>
								<span>{teams[card.team]}</span>
							</div>
							<p>{card.title}</p>
						</div>
					) : (
						<p>空位</p>
					)}
				</div>
			))}
		</div>
	);
}
