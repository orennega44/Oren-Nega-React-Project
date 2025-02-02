/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

export const UserStatus = createContext();

export const UserContext = ({ children }) => {
	const [token, setToken] = useState(null);
	const [decodedToken, setDecodedToken] = useState({});
	;

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			setDecodedToken(jwtDecode(localStorage.getItem('token')));
		}
	}, [token]);

	const login = (newToken) => {
		if (!localStorage.token) {
			localStorage.setItem('token', newToken);
			setToken(newToken);
			setDecodedToken(jwtDecode(newToken));
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setDecodedToken({});
	};

	return (
		<UserStatus.Provider value={{ decodedToken, token, login, logout }}>
			{children}
		</UserStatus.Provider>
	);
};
