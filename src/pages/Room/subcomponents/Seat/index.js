import React from 'react';
import { db } from '../../../../services';
import { useContext } from 'react';
import { AuthContext } from '../../../../App';
import { defaultAvatarURL } from '../../../../constants/avatar';

export default function Seat({
	gameData,
	seatNumber,
	gameId,
	player,
	removeUserFromSeat,
	setPlayer,
}) {
	const handleSit = async () => {
		let username;
		if (player.username) {
			username = player.username;
			// await removeUserFromSeat(player.userId);
		} else {
			username = prompt('请输入用户名');
		}

		if (username) {
			const nextGameData = { ...gameData };
			let prevSeat;

			prevSeat = Object.values(nextGameData.players).find(
				(v, i) => v && v.userId === player.userId,
			);

			console.log(prevSeat);

			if (prevSeat) nextGameData.players[prevSeat.seatNumber] = {};

			nextGameData.players[seatNumber] = {
				...player,
				seatNumber,
			};

			db()
				.ref('games/' + gameId)
				.set(nextGameData)
				.then((resp) => {
					console.log('success');
				})
				.catch((err) => {
					alert(err);
				});
		}
	};

	const playerInSeat = gameData.players[seatNumber];
	const user = useContext(AuthContext);

	return (
		<div className='seat-container shadow-sm'>
			<span>{seatNumber + 1}号玩家</span>
			{playerInSeat && playerInSeat.username ? (
				<React.Fragment>
					<div className='player-info'>
						<img src={playerInSeat.avatar} alt='avatar' />
						<p>{playerInSeat.username}</p>
					</div>
					{user.uid === playerInSeat.userId ? (
						<button onClick={handleSit} className='btn btn-warning'>
							离开座位
						</button>
					) : (
						<span className='spacer'></span>
					)}
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className='player-info'>
						{/* <img src={defaultAvatarURL} alt='avatar' /> */}
						<p>空位</p>
					</div>
					<button onClick={handleSit} className='btn btn-primary'>
						坐下
					</button>
				</React.Fragment>
			)}
		</div>
	);
}
