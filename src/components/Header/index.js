import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { auth } from 'firebase';
import { AuthContext } from '../../App';
import './index.scss';

const Header = () => {
	const handleGoogleLogin = () => {
		auth()
			.signInWithRedirect(new auth.GoogleAuthProvider())
			.then(function (result) {
				console.log('Signed In');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	};
	const user = useContext(AuthContext);
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='/'>
				宋巢桌游
			</a>
			<div className='navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					{routes.map((link, i) => (
						<li key={i} className='nav-item'>
							<Link className='nav-link' to={link.link}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				{user.displayName ? (
					<div className='right user-avatar'>
						<img src={user.photoURL} alt='avatar' />
						<div className='actions'>
							<span>{user.displayName}</span>
							<span
								onClick={() =>
									auth()
										.signOut()
										.then(() => window.location.reload())
								}
								className='logout text-danger'
							>
								退出登录
							</span>
						</div>
					</div>
				) : (
					<li className='nav-item right'>
						<button onClick={handleGoogleLogin} className='btn btn-primary'>
							Google 登录
						</button>
					</li>
				)}
			</div>
		</nav>
	);
};

export default Header;
