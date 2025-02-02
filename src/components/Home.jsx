

import { useEffect, useState } from 'react';

function Home() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); 
	const cardsPerPage = 12;

	useEffect(() => {
		fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards')
			.then((res) => res.json())
			.then((info) => setData(info))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	
	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);


	const totalPages = Math.ceil(data.length / cardsPerPage);
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}

	};

	return (
		<>
			<div className='home'>
				<h3>Home</h3>

				<div className='allCards'>
					{currentCards.map((card) => (
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
								<hr />
								<span className='cardInfo'>
									<p>Phone: {card.phone}</p>
									<p>
										Address: {card.street} {card.houseNumber} {card.city}
									</p>
									<p>Card Number: {card.bizNumber}</p>
								</span>
								<div className='card-iqons'>
									<i className='fa-solid fa-heart'></i>
									<i className='fa-solid fa-phone'></i>
								</div>
							</div>
						</div>
					))}
				</div>

				
				<div className='pagination'>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}>
						Previous
					</button>
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i + 1}
							onClick={() => handlePageChange(i + 1)}
							className={currentPage === i + 1 ? 'act' : ''}>
							{i + 1}
						</button>
					))}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
                        onScroll='#top'>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;


