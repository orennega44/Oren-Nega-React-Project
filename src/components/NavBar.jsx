/** @format */

import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg'>
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
						aria-controls='navbarNavAltMarkup'
						aria-expanded='true'
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
						</div>
						<form
							className='d-flex'
							role='search'>
							<input
								className='form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							{/* <button
								className='btn btn-outline-success'
								type='submit'>
								Search
							</button> */}
						</form>
						<div className='navbar-nav'>
							<span>
								<i className='fa-regular fa-moon'></i>
							</span>
							<NavLink
								className='navLinks'
								to={'/login'}>
								Login
							</NavLink>
							<NavLink
								className='navLinks'
								to={'/register'}>
								Register
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
