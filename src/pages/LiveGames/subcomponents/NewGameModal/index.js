import React, { useState, useEffect } from 'react';
import roles, { teams, teamsColor } from '../../../../constants/roles';
import RolesPicker from '../RolesPicker';
import CardsContainer from '../CardsContainer';
import PowerGrid from '../PowerGrid';
import RulesContainer from '../RulesContainer';
import PlayerCount from '../PlayerCount';
import RoomTitle from '../RoomTitle';

export default function NewGameModal({ handleCreateGame }) {
	const defaultPlayers = 12;
	const [cards, setCards] = useState([]);
	const [playerCount, setPlayerCount] = useState(defaultPlayers);
	const [rules, setRules] = useState([]);
	const [title, setTitle] = useState('');

	const handleRuleChange = (rule, isChecked) => {
		const nextRules = [...rules];
		if (isChecked) {
			nextRules.push(rule);
		} else {
			const index = nextRules.indexOf(rule);
			nextRules.splice(index, 1);
		}
		setRules(nextRules);
	};

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

	const formInputs = [
		{
			component: RoomTitle,
			props: {
				title,
				setTitle,
			},
		},
		{
			component: PlayerCount,
			props: {
				setPlayerCount,
				handleRolesUpdate,
				playerCount,
			},
		},
		{
			component: RolesPicker,
			props: {
				roles,
				handleAddRole,
				handleRemoveRole,
			},
		},
		{
			component: CardsContainer,
			props: {
				cards,
				handleRemoveRole,
				teamsColor,
				teams,
			},
		},
		{
			component: PowerGrid,
			props: {
				cards,
				teams,
				teamsColor,
			},
		},
		{
			component: RulesContainer,
			props: {
				currentRules: rules,
				handleRuleChange,
			},
		},
	];
	return (
		<div className='dialog'>
			<form>
				<button
					className='submit-btn btn btn-primary'
					onClick={(e) =>
						handleCreateGame(e, {
							playerCount,
							rules,
							title,
							cards,
						})
					}
				>
					创建房间
				</button>
				{formInputs.map((v, i) => (
					<div key={i} className='input-container'>
						<v.component {...v.props} />
					</div>
				))}
			</form>
		</div>
	);
}
