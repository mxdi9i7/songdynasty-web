import React, { useState } from 'react';
import roles from '../../constants/roles';
import './index.scss';

export default function LiveGamesPage() {
	const [showModal, setShowModal] = useState(true);
	const [cards, setCards] = useState([]);
	const [playerCount, setPlayerCount] = useState(null);

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

	const handleAddRole = (e, role) => {
		e.preventDefault();
		const nextCards = [...cards];
		nextCards.push(role);
		setCards(nextCards);
	};

	const handleRemoveRole = (e, role) => {
		e.preventDefault();
		const nextCards = [...cards];
		let indexToRemove;
		nextCards.forEach((v, i) => (v.id === role.id ? (indexToRemove = i) : -1));
		if (indexToRemove > -1) {
			nextCards.splice(indexToRemove, 1);
		}
		setCards(nextCards);
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
							<div className='cards-container'>
								{cards.map((card, i) => (
									<div className='card'>{card.title}</div>
								))}
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
