/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import '../styles/Card.css';
import { ThemeContext } from '../../hooks/ThemeContext';
import { UserStatus } from '../../hooks/TokenContext';
import { MdDeleteForever } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { deleteCard, likeCard } from '../services/CardsService';
import { NavLink } from 'react-router-dom';
import { errorMessage, successMessage } from '../services/feedBackService';

function Card({ card }) {
	const { dark } = useContext(ThemeContext);
	const { token, decodedToken } = useContext(UserStatus);
	const [like, setLike] = useState(false);
	const [likes, setLikes] = useState(card.likes || []);

	let userCard = decodedToken.isBusiness && decodedToken._id === card.user_id;
	
	let adminOrUserCard =
		decodedToken.isAdmin || decodedToken._id === card.user_id;

	useEffect(() => {
		setLike(likes.includes(decodedToken._id));
	}, [likes, decodedToken._id]);

	const handleDelete = async () => {
		try {
			await deleteCard(card._id, card.bizNumber, token)
				.then((res) => {
					successMessage('card deleted successfuly! '), console.log(res.data);
				})
				.catch((err) => {
					errorMessage('failed card deleting'), console.log(err);
					console.log(card._id);
					console.log(card.bizNumber);
					console.log(token);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const handleLike = async () => {
		if (!token) return;

		try {
			const response = await likeCard(card._id, token);
			if (response.data) {
				setLikes((prevLikes) => {
					if (prevLikes.includes(decodedToken._id)) {
						return prevLikes.filter((id) => id !== decodedToken._id);
					} else {
						return [...prevLikes, decodedToken._id];
					}
				});
				setLike((prevLike) => !prevLike);
			}
		} catch (error) {
			console.error('Error liking/unliking card:', error);
		}
	};

	const handleCardPage = ()=>{

		alert(`"${card.title}" Phone Number: ${card.phone}`)
		
	}


	return (
		<>
			<div className={dark ? 'card darkCard' : 'card'}>
				<img
					src={card.image.url}
					className='card-img-top'
					alt={card.image.alt}
				/>

				<div className={dark ? 'card-body darkBody' : 'card-body'}>
					<h5 className='card-title'>{card.title}</h5>
					<p className='card-text'>{card.subtitle}</p>

					<div className='cardInfo'>
						<p>Phone: {card.phone} </p>
						<p>
							Address: {card.address.street} {card.address.houseNumber},
							{card.address.city}
						</p>
						<p>Card Number: {card.bizNumber} </p>
					</div>
					<div className='card-iqons'>
						{token && (
							<span
								className={!like ? ' ' : 'hart'}
								onClick={handleLike}>
								<FaHeart />
							</span>
						)}
						<span onClick={handleCardPage}>
							<FaPhone />
						</span>
						{adminOrUserCard && (
							<span onClick={handleDelete}>
								<MdDeleteForever />
							</span>
						)}

						{userCard && (
							<NavLink
								to={`/updateCard/${card._id}`}
								className={dark ? 'update darkUpdate' : 'update'}>
								<span>
									<FaPen />
								</span>
							</NavLink>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
