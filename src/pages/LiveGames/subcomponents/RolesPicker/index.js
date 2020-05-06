import React from 'react';

export default function RolesPicker({
	roles,
	handleAddRole,
	handleRemoveRole,
}) {
	return (
		<div className='role-selector'>
			{roles.map((role) => (
				<div className='role-block'>
					<span>{role.title}</span>
					<div className='button-container'>
						<button onClick={(e) => handleAddRole(e, role)}>+</button>
						{/* <button onClick={(e) => handleRemoveRole(e, role)}>-</button> */}
					</div>
				</div>
			))}
		</div>
	);
}
