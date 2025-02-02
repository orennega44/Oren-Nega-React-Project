

import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useContext } from 'react';
import { UserStatus } from '../../hooks/TokenContext';
import { logoutMessage } from '../services/feedBackService';
import { FaMoon } from 'react-icons/fa';
import { SearchContext } from '../../hooks/SearchContext';
import { ThemeContext } from '../../hooks/ThemeContext';
import { MdSunny } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { GrUserAdmin } from 'react-icons/gr';

function Navbar() {
	const { token, logout, decodedToken } = useContext(UserStatus);
	const { setSearchQuery } = useContext(SearchContext);
	const { toggleTheme, dark } = useContext(ThemeContext);
	const navgate = useNavigate();

	const handleLogout = () => {
		logout();
		logoutMessage('User Disconnected!');
		navgate('/');
	};

	const handleSearch = (value) => {
		setSearchQuery(value);
	};

	return (
		<>
			<nav
				className={
					dark
						? 'navbar navbar-expand-lg navbar-dark'
						: 'navbar navbar-expand-lg'
				}>
				<div className='container-fluid'>
					<NavLink
						className='navbar-brand'
						to={'/'}>
						B-Cards
					</NavLink>

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='#navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<NavLink
								className='navLinks'
								to={'/about'}>
								About
							</NavLink>
							{decodedToken.isAdmin &&<NavLink
								className='navLinks'
								to={'/sandbox'}>
								sandbox
							</NavLink>}
							{token && (
								<>
									<button
										className='navLinks'
										id='logoutBtn'
										onClick={() => handleLogout()}>
										Logout
									</button>
									<h4></h4>
								</>
							)}
						</div>
						<form
							className='d-flex'
							role='search'>
							<input
								className='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
								onChange={(e) => handleSearch(e.target.value)}
							/>
						</form>
						<div className='navbar-nav'>
							<button
								className='navIcon'
								onClick={toggleTheme}>
								{!dark ? <FaMoon /> : <MdSunny />}
							</button>

							{!token ? (
								<>
									<NavLink
										className='navLinks'
										to={'/login'}>
										Login
									</NavLink>
								</>
							) : (
								<NavLink
									className='navLinks'
									to={'/favCards'}>
									Favorite cards
								</NavLink>
							)}

							{token && decodedToken.isBusiness && (
								<NavLink
									className='navLinks'
									to={'/myCards'}>
									my cards
								</NavLink>
							)}

							{!token && (
								<NavLink
									className='navLinks'
									to={'/register'}>
									Register
								</NavLink>
							)}
							{token && (
								<NavLink
									className='userProfile'
									to={`/userprofile/${decodedToken._id}`}>
									{decodedToken.isAdmin ? <GrUserAdmin /> : <CgProfile />}
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
