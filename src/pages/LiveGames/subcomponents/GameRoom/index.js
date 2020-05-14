import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import roles from '../../../../constants/roles';
import './index.scss';
import { Link } from 'react-router-dom';

moment.locale('zh-cn');

export default function GameRoom({ data, id }) {
	let villagerCount = 0,
		godCount = 0,
		wolfCount = 0;
	data.cards.forEach((v) => {
		const role = roles.find((r) => r.id === v);
		switch (role && role.team) {
			case 'villager':
				villagerCount++;
				break;
			case 'god':
				godCount++;
				break;
			case 'wolf':
				wolfCount++;
				break;
			default:
				break;
		}
	});
	return (
		<div class='game-card-container shadow-lg card'>
			<div className='image-container'>
				<img
					src='https://res.cloudinary.com/dtgh01qqo/image/upload/v1589392905/song/%E7%AC%AC1%E9%A1%B5.png'
					alt='cover'
				/>
			</div>
			<div class='card-body'>
				<small class='create-time'>
					Created {moment(data.createTime).locale('zh_cn').fromNow()}
				</small>
				<h5 class='card-title'>{data.title}</h5>
				<p className='card-text'>
					<span>{data.numberOfPlayers}人局 | </span>
					<span>
						{villagerCount}民 {godCount}神 {wolfCount}狼
					</span>
					<div className='player-avatar-container'>
						{Object.values(data.players).map((p, i) => (
							<React.Fragment>
								<img
									className={classnames('player-avatar')}
									style={{ left: `-${i * 20}px` }}
									src={p.avatar}
									alt='avatar'
								/>
							</React.Fragment>
						))}
					</div>
				</p>
			</div>
			<div class='card-footer'>
				{Object.keys(data.players).length < data.numberOfPlayers ? (
					<Link to={`/room/${id}`} className=' btn btn-block btn-primary'>
						加入
					</Link>
				) : (
					<button className='disabled btn btn-block'>已满人</button>
				)}
			</div>
		</div>
	);
}
