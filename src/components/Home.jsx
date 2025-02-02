/** @format */

import { useContext, useEffect, useState, useTransition } from 'react';
import { getAllCards } from '../services/CardsService';
import Card from './Card';
import AddCardBtn from './AddCardBtn';
import '../styles/Home.css';
import { SearchContext } from '../../hooks/SearchContext';
import { SearchBar } from '../services/searchBar';
import { UserStatus } from '../../hooks/TokenContext';
import { ThemeContext } from '../../hooks/ThemeContext';

function Home() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const { searchQuery } = useContext(SearchContext);
	const [currentPage, setCurrentPage] = useState(1);
	const { token, decodedToken } = useContext(UserStatus);
	const [isPending, startTransition] = useTransition();
	const { dark } = useContext(ThemeContext);

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	const itemsPerPage = 6;

	useEffect(() => {
		getAllCards()
			.then((res) => {
				setData(res.data);
				setFilteredData(res.data);
			})
			.catch((err) => {
				console.error('Error Fetching Data:', err);
			});
	}, []);

	useEffect(() => {
		startTransition(() => {
			const result = SearchBar(searchQuery, data);
			setFilteredData(result);
		});
	}, [data, searchQuery]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentCards = filteredData.slice(
		startIndex,
		startIndex + itemsPerPage,
	);

	const getPageNumbers = () => {
		const pageNumbers = [];
		for (let i = currentPage; i <= Math.min(currentPage + 6, totalPages); i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const handlePageChange = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	return (
		<>
			<div className={dark ? 'home darkHome' : 'home'}>
				<h3 className='homeTitle'>Home</h3>

				{isPending ? (
					<div
						className='spinner-border'
						role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : currentCards ? (
					<div
						className='allCards'
						id='topCards'>
						{currentCards.map((card) => (
							
									<Card
										key={card._id}
										card={card}
									/>
								
							
						))}
					</div>
				) : (
					<div className='noDataCard'>
						<p>card not found!</p>
					</div>
				)}

				{token && decodedToken.isBusiness && <AddCardBtn />}

				<div className='pagination-controls'>
					<button
						onClick={() => handlePageChange(1)}
						disabled={currentPage === 1}>
						&laquo;
					</button>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}>
						&lsaquo;
					</button>

					{getPageNumbers().map((pageNumber) => (
						<button
							key={pageNumber}
							onClick={() => handlePageChange(pageNumber)}
							className={currentPage === pageNumber ? 'active' : ''}>
							{pageNumber}
						</button>
					))}

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}>
						&rsaquo;
					</button>
					<button
						onClick={() => handlePageChange(totalPages)}
						disabled={currentPage === totalPages}>
						&raquo;
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
