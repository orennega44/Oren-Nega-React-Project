/** @format */

import { useEffect, useState } from 'react';
// import { getAllCards } from '../services/Cards';

function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/cards')
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

// import { useEffect, useState } from 'react';

// function Home() {
// 	const [data, setData] = useState([]); // All fetched data
// 	const [currentPage, setCurrentPage] = useState(1); // Current page
// 	const cardsPerPage = 12; // Number of cards per page

// 	useEffect(() => {
// 		fetch('http://localhost:8000/cards')
// 			.then((res) => res.json())
// 			.then((info) => setData(info))
// 			.catch((error) => console.error('Error fetching data:', error));
// 	}, []);

// 	// Calculate the cards to display for the current page
// 	const indexOfLastCard = currentPage * cardsPerPage;
// 	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
// 	const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

// 	// Handle page change
// 	const totalPages = Math.ceil(data.length / cardsPerPage);
// 	const handlePageChange = (page) => {
// 		if (page >= 1 && page <= totalPages) {
// 			setCurrentPage(page);
// 		}

// 	};

// 	return (
// 		<>
// 			<div className='home'>
// 				<h3>Home</h3>

// 				<div className='allCards'>
// 					{data ? (currentCards.map((card) => (
// 						<div
// 							key={card._id}
// 							className='card'>
// 							<img
// 								src={card.image.url}
// 								className='card-img-top'
// 								alt={card.image.alt}
// 							/>
// 							<div className='card-body'>
// 								<h5 className='card-title'>{card.title}</h5>
// 								<p className='card-text'>{card.description}</p>
// 								<hr />
// 								<span className='cardInfo'>
// 									<p>Phone: {card.phone}</p>
// 									<p>
// 										Address: {card.address.street} {card.address.houseNumber}{' '}
// 										{card.address.city}
// 									</p>
// 									<p>Card Number: {card.bizNumber}</p>
// 								</span>
// 								<div className='card-iqons'>
// 									<i className='fa-solid fa-heart'></i>
// 									<i className='fa-solid fa-phone'></i>
// 								</div>
// 							</div>
// 						</div>
// 					))):(<p className='card'>no data...</p>)

// 					}
// 				</div>

// 				{/* Pagination Controls */}
// 				<div className='pagination'>
// 					<button
// 						onClick={() => handlePageChange(currentPage - 1)}
// 						disabled={currentPage === 1}>
// 						Previous
// 					</button>
// 					{Array.from({ length: totalPages }, (_, i) => (
// 						<button
// 							key={i + 1}
// 							onClick={() => handlePageChange(i + 1)}
// 							className={currentPage === i + 1 ? 'act' : ''}>
// 							{i + 1}
// 						</button>
// 					))}
// 					<button
// 						onClick={() => handlePageChange(currentPage + 1)}
// 						disabled={currentPage === totalPages}
// 						onScroll='#top'>
// 						Next
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default Home;
