import React from 'react';
import roles, { teams } from '../../constants/roles';
import './index.scss';

export default function RolesPage() {
	return (
		<div className='roles-page'>
			<div className='roles-container'>
				{roles.map((role) => (
					<div className='role'>
						<div className='image-container'>
							<img src={role.thumbnail} alt='' />
						</div>
						<h2>
							{role.title}({teams[role.team]})
						</h2>
						<p className='description'>{role.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
