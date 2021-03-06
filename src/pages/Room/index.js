import React, { useEffect, useState, useContext } from 'react';
import { db } from '../../services';
import Seat from './subcomponents/Seat';
import { AuthContext } from '../../App';
import { defaultAvatarURL } from '../../constants/avatar';
import './index.scss';

export default function RoomPage({ match }) {
	const { id } = match.params;
	const [game, setGame] = useState({});
	const user = useContext(AuthContext);
	const [player, setPlayer] = useState({});

	useEffect(() => {
		setPlayer({
			userId: user ? user.uid : '',
			username: user ? user.displayName : '',
			avatar: user ? user.photoURL : defaultAvatarURL,
			card: null,
		});
	}, [user]);

	useEffect(() => {
		const fetchedGame = db().ref('games/' + id);
		fetchedGame.on('value', (snapshot) => {
			setGame(snapshot.val());
		});
	}, [id]);

	const renderEmptySeats = () => {
		const seats = [];
		for (let i = 0; i < game.numberOfPlayers; i++) {
			seats.push(
				<Seat
					player={player}
					setPlayer={setPlayer}
					gameData={game}
					gameId={id}
					seatNumber={i}
					key={i}
				/>,
			);
		}
		return seats;
	};

	return (
		<div className='page'>
			<h1>{game.title}</h1>
			<div className='seats-container'>{renderEmptySeats()}</div>
		</div>
	);
}
