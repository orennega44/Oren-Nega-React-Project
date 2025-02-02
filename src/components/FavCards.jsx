/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { useContext, useEffect, useState } from 'react';
import '../styles/FavCards.css';
import AddCardBtn from './AddCardBtn';
import { UserStatus } from '../../hooks/TokenContext';
import { getAllCards } from '../services/CardsService';
import { ThemeContext } from '../../hooks/ThemeContext';
import Card from './Card';

function FavCards() {
	const { token, decodedToken } = useContext(UserStatus);
	const { dark } = useContext(ThemeContext);

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	const [myFavCards, setMyFavCards] = useState([]);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const res = await getAllCards();
				const allData = res.data;

				
				const filteredCards = allData.filter((card) =>
					card.likes.includes(decodedToken._id),
				);

				
				setMyFavCards(filteredCards);
			} catch (error) {
				console.log(error);
			}
		};

		if (decodedToken) {
			fetchCards();
		}
	}, [decodedToken]);

	console.log(myFavCards);

	return (
		<>
			<div className='Container'>
				<h3>fav cards</h3>
				<div className='favCards'>
					{myFavCards.length ? (
						myFavCards.map((card) => (
							
								<div
									key={card._id}
									className='Fcard'>
									<Card
										key={card._id}
										card={card}
									/>
								</div>
							
						))
					) : (
						<h2>you have not liked cards</h2>
					)}
				</div>

				{token && decodedToken?.isBusiness && <AddCardBtn />}
			</div>
		</>
	);
}

export default FavCards;
