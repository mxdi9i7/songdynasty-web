import React, { useState } from 'react';
import NewGameModal from './subcomponents/NewGameModal';
import GameRoom from './subcomponents/GameRoom';

import { db } from '../../services';

import './index.scss';
import { useEffect } from 'react';

export default function LiveGamesPage() {
	const [showModal, setShowModal] = useState(false);
	const [games, setGames] = useState({});

	useEffect(() => {
		const fetchedGames = db().ref('games/');
		fetchedGames.on('value', (snapshot) => {
			setGames(snapshot.val());
		});
	}, []);

	const handleCreateGame = (e, data) => {
		e.preventDefault();

		const newGame = {
			numberOfPlayers: data.playerCount,
			rules: data.rules,
			title: data.title,
			cards: data.cards.map((card) => card.id || ''),
			createTime: Date.now(),
			password: data.password || '',
			players: data.cards.map((v, i) => ({ [i]: -1 })),
		};

		db()
			.ref('games/')
			.push(newGame, (error) => {
				if (error) {
					alert(error);
				} else {
					alert('create game success');
					setShowModal(false);
				}
			});
	};

	return (
		<div className='page live-page'>
			<div className='button-container'>
				<button
					className='btn btn-primary btn-lg create-game-button'
					onClick={() => setShowModal(!showModal)}
				>
					Add new game
				</button>
			</div>
			<div className='games-container'>
				{games &&
					Object.entries(games).map((game, i) => (
						<GameRoom key={i} data={game[1]} id={game[0]} />
					))}
			</div>

			{showModal && <NewGameModal handleCreateGame={handleCreateGame} />}
		</div>
	);
}
