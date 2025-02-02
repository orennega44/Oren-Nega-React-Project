

import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { useContext } from 'react';
import { UserStatus } from '../../hooks/TokenContext';
import { FaHeart } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa';

import {ThemeContext} from '../../hooks/ThemeContext'


function Footer() {
	const { token ,decodedToken} = useContext(UserStatus);

	const {dark} = useContext(ThemeContext)

	return (
		<>
			<footer className={dark ? 'footer darkFooter' : 'footer'}>
				<span>
					<NavLink
						className={dark ? 'footerLink darkLink' : 'footerLink'}
						to={'/about'}>
						<IoMdInformationCircleOutline />
					</NavLink>
					<p>about</p>
				</span>

				{token && (
					<span>
						<NavLink
							className={dark ? 'footerLink darkLink' : 'footerLink'}
							to={'/favCards'}>
							<FaHeart />
						</NavLink>
						<p>favorit cards</p>
					</span>
				)}

				{token && decodedToken.isBusiness ? (
					<span>
						<NavLink
							className={dark ? 'footerLink darkLink' : 'footerLink'}
							to={'/myCards'}>
							<FaRegAddressCard />
						</NavLink>
						<p>my cards</p>
					</span>
				) : (
					<></>
				)}
			</footer>
		</>
	);
}

export default Footer;
