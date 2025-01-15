/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
	return (
		<>
			<Router>
				<Navbar />
				
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
				</Routes> 
				
			</Router>

			
		</>
	);
}

export default App;
