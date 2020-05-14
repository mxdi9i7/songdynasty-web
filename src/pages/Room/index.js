import React, { useEffect, useState, useContext } from 'react';
import { db } from '../../services';
import Seat from './subcomponents/Seat';
import { AuthContext } from '../../App';
import './index.scss';
const defaultAvatarURL =
	'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581124148/song/006tT5Uqjw1f4xtzu7lp3j306106674s.jpg';

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
