/** @format */

import { useEffect, useState } from 'react';
// import { getAllCards } from '../services/Cards';

function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://card-server-27am.onrender.com/cards')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => {
				console.error('Error Fetchiong Data ' + err);
			});
	}, []);

	return (
		<>
			<div className='home'>
				<h3>home</h3>

				<div className='allCards'>
					{data.length !== 0 ? (
						data.map((card) => (
							<div
								key={card._id}
								className='card'>
								<img
									src={card.image.url}
									className='card-img-top'
									alt={card.image.alt}
								/>

								<div className='card-body'>
									<h5 className='card-title'>{card.title}</h5>
									<p className='card-text'>{card.description}</p>
									<hr></hr>
									<span className='cardInfo'>
										<p>Phone: {card.phone} </p>
										<p>
											Address: {card.address.street} {card.address.houseNumber},
											{card.address.city}
										</p>
										<p>Card Number: {card.bizNumber} </p>
									</span>
									<div className='card-iqons'>
										<i className='fa-solid fa-heart'></i>
										<i className='fa-solid fa-phone'></i>
									</div>
								</div>
							</div>
						))
					) : (
						<p style={{ textAlign: 'center', position: 'absolute' }}>
							no card in the data base
						</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Home;


