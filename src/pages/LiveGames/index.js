import React, { useState, useEffect } from 'react';
import roles, { teams, teamsColor } from '../../constants/roles';
import './index.scss';

export default function LiveGamesPage() {
	const defaultPlayers = 9;
	const [showModal, setShowModal] = useState(true);
	const [cards, setCards] = useState([]);
	const [playerCount, setPlayerCount] = useState(defaultPlayers);

	const handleRolesUpdate = (newCount) => {
		const nextCards = [...cards];
		const difference = newCount - cards.length;
		if (difference > 0) {
			for (let i = 0; i < difference; i++) {
				nextCards.push({ title: '' });
			}
		} else if (difference < 0) {
			nextCards.splice(newCount, -difference);
		}
		setCards(nextCards);
	};

	useEffect(() => {
		const nextCards = [...cards];
		for (let i = 0; i < defaultPlayers; i++) {
			nextCards.push({});
		}
		setCards(nextCards);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleAddRole = (e, role) => {
		e.preventDefault();
		const nextCards = [...cards];
		let currentFilled = 0;
		let nextAvailableSpot = 0;

		for (let i = 0; i < cards.length; i++) {
			const v = cards[i];
			if (v.id) {
				currentFilled++;
			} else {
				nextAvailableSpot = i;
				break;
			}
		}

		if (currentFilled < playerCount) {
			nextCards[nextAvailableSpot] = role;
			setCards(nextCards);
		}
	};

	const handleRemoveRole = (e, role) => {
		e.preventDefault();
		const nextCards = [...cards];
		let indexToRemove;
		nextCards.forEach((v, i) => (v.id === role.id ? (indexToRemove = i) : -1));
		if (indexToRemove > -1) {
			nextCards[indexToRemove] = {};
		}
		setCards(nextCards);
	};

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
		<div className='page live-page'>
			<h1>Live games page</h1>
			<button onClick={() => setShowModal(!showModal)}>Add new game</button>
			{showModal && (
				<div className='dialog'>
					<h1>Add new game</h1>
					<form>
						<div className='input-container'>
							<label>游戏标题</label>
							<input type='text' name='title' />
						</div>
						<div className='input-container'>
							<label>玩家人数</label>
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
							</select>
						</div>
						<div className='input-container'>
							<div className='role-selector'>
								{roles.map((role) => (
									<div className='role-block'>
										<span>{role.title}</span>
										<div className='button-container'>
											<button onClick={(e) => handleAddRole(e, role)}>+</button>
											<button onClick={(e) => handleRemoveRole(e, role)}>
												-
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='input-container'>
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
											<p>空</p>
										)}
									</div>
								))}
							</div>
						</div>
						<div className='input-container'>
							<div className='power-bar'>
								{Object.entries(teams).map((teamArr) => {
									let filled = 0;
									cards.forEach((v) => v.id && filled++);
									const percentage = getPowerLevelByTeam(teamArr[0]);
									return (
										<div
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
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
