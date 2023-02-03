import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import DemoUserButton from '../DemoUserButton';
import Authentication from './Authentication';
import SwitchToHostingButton from './SwitchToHostingButton';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<div>
				<div>
					<SwitchToHostingButton />
				</div>
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			</div>
		);
	} else {
		sessionLinks = (
			// <li className='user-action-dropdown'>
			// 	<div>
			// 		<OpenModalButton
			// 			buttonText="Sign up"
			// 			modalComponent={<SignupFormModal />}
			// 		/>
			// 	</div>
			// 	<div>
			// 		<OpenModalButton
			// 			buttonText="Log in"
			// 			modalComponent={<LoginFormModal />}
			// 		/>
			// 	</div>
			// 	<hr></hr>
			// 	<div>
			// 		<DemoUserButton/>
			// 	</div>
			// </li>
			<div>
				<div>
					<SwitchToHostingButton />
				</div>
				<div>
					<Authentication user={sessionUser} />
				</div>
			</div>
		);
	}

	return (
		<ul>
			<NavLink exact to="/">
				<div>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
						className="bnbhub-logo"
					/>
				</div>
			</NavLink>
			{isLoaded && sessionLinks}
		</ul>
	);
}

export default Navigation;
