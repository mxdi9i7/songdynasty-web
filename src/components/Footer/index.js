import React from 'react';
import './index.scss';

const Footer = () => {
	return (
		<footer id='sticky-footer' className='py-4 bg-dark text-white-50'>
			<div className='container text-center'>
				<small>Copyright &copy; 宋朝桌游 </small>
				<small>
					| Made with{' '}
					<span role='img' aria-label='lightening'>
						⚡
					</span>{' '}
					By <a href='https://thefuturesphere.com'>未来领域</a>
				</small>
			</div>
		</footer>
	);
};

export default Footer;
