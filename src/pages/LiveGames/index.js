import React, { useState, useEffect } from 'react';
import NewGameModal from './subcomponents/NewGameModal';

import './index.scss';

export default function LiveGamesPage() {
	const [showModal, setShowModal] = useState(true);
	return (
		<div className='page live-page'>
			<h1>Live games page</h1>
			<button onClick={() => setShowModal(!showModal)}>Add new game</button>
			{showModal && <NewGameModal />}
		</div>
	);
}
