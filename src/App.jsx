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

import './styles/App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import FavCards from './components/FavCards';
import MyCards from './components/MyCards';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../hooks/TokenContext';
import { SearchProvider } from '../hooks/SearchContext';
import { ThemeProvider } from '../hooks/ThemeContext';
import ModalContent from './components/ModalContent';
import { ModalContext, ModalProvider } from '../hooks/ModalContext';
import { useContext } from 'react';

import UpdateCard from './components/UpdateCard';
import UserProfile from './components/UserProfile';
import SandBox from './components/SandBox';
import UserUpdate from './components/UpdateUser';



function App() {
	return (
	
			<ThemeProvider>
				<ModalProvider>
					<AppContent />
				</ModalProvider>
			</ThemeProvider>
		
	);
}

function AppContent() {
	const { modalOpen, setModalOpen } = useContext(ModalContext);

	return (
		<>
			<ToastContainer />
			<UserContext>
				<SearchProvider>
					<Router>
						<Navbar />
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/userprofile/:id'
								element={<UserProfile />}
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
							<Route
								path='/favCards'
								element={<FavCards />}
							/>
							<Route
								path='/myCards'
								element={<MyCards />}
							/>
							<Route
								path='/updateCard/:id'
								element={<UpdateCard />}
							/>
							<Route
								path='/updateuser/:id'
								element={<UserUpdate />}
							/>
							<Route
								path='/sandbox'
								element={<SandBox />}
							/>
						</Routes>
						{modalOpen && (
							<ModalContent
								show={modalOpen}
								handleClose={() => setModalOpen(false)}
							/>
						)}
						<Footer />
					</Router>
				</SearchProvider>
			</UserContext>
		</>
	);
}

export default App;
