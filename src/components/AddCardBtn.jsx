/** @format */

import { useContext } from 'react';
import '../styles/AddCardBtn.css';
import { FaPlus } from 'react-icons/fa';
import { ModalContext } from '../../hooks/ModalContext';

function AddCardBtn() {
	const { setModalOpen } = useContext(ModalContext);
	return (
		<>
			<button
				type='button'
				className='btn btn-primary addCard'
				data-bs-toggle='modal'
				data-bs-target='#myModal'
				onClick={() => setModalOpen(true)}>
				<FaPlus />
			</button>
		</>
	);
}

export default AddCardBtn;
