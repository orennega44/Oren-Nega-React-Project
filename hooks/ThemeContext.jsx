/** @format */

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(false);

	const toggleTheme = ()=>{
        setDark(prevDark => !prevDark)
        console.log(dark);
        
    }

	return (
		<ThemeContext.Provider value={{ dark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
