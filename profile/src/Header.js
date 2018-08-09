import React from 'react';

const Header = (props) => {
	return (
		<div className='header'>
			<img className='logo' src={props.src} alt='Logo' />
			<div className='nameTitle'>
				<h1>Matthew Huston</h1>
				<h3>Web Developer</h3>
			</div>
		</div>
	)
}

export default Header