
import { useContext, useEffect, useState, useTransition } from 'react';
import AddCardBtn from '../components/AddCardBtn';
import '../styles/MyCards.css';
import { UserStatus } from '../../hooks/TokenContext';
import { getAllMyCards } from '../services/CardsService';
import Card from './Card';
import { ThemeContext } from '../../hooks/ThemeContext';

function MyCard() {
	const { token } = useContext(UserStatus);
	const { dark } = useContext(ThemeContext);
	const [isPannding, startTransition] = useTransition();
	const [myCards, setMyCards] = useState([]);

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	useEffect(() => {
		try {
			getAllMyCards(token)
				.then((res) => startTransition(() => setMyCards(res.data)))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	}, [token]);

	return (
		<>
			<div className={dark ? 'myCardContainer dark' : 'myCardContainer'}>
				<h3>My cards</h3>
				<div className='cardsDisplay'>
					{myCards.length ? (
						<div className='mycards'>
							{myCards.map((card) => (
								<Card
									key={card._id}
									card={card}
								/>
							))}
						</div>
					) : isPannding ? (
						<div
							className='spinner-border'
							role='status'
							id='mySpinner'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					) : (
						<>
							<h1>you have no cards...</h1>

							<h2>let&apos;s make a new one!</h2>
						</>
					)}
				</div>
				<AddCardBtn />
			</div>
		</>
	);
}

export default MyCard;
