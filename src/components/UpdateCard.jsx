/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import '../styles/UpdateCard.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserStatus } from '../../hooks/TokenContext';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getCardsById, updateCard } from '../services/CardsService';
import { errorMessage, successMessage } from '../services/feedBackService';
import CardForm from '../../validators/cards/CardForm';
import { ThemeContext } from '../../hooks/ThemeContext';

function UpdateCard() {
	const navigate = useNavigate();
	const { token } = useContext(UserStatus);
	const { dark } = useContext(ThemeContext);
	const { id } = useParams();
	const [card, setCard] = useState();


	useEffect(() => {
		if (id) {
			try {
				getCardsById(id)
					.then((res) => setCard(res.data))
					.catch((err) => console.log(err));
			} catch (error) {
				console.log(error);
			}
		}
	}, [id]);
	

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			title: card?.title,
			subtitle: card?.subtitle,
			description: card?.description,
			phone: card?.phone,
			email: card?.email,
			web: card?.web,
			image: {
				url: card?.image.url,
				alt: card?.image.alt,
			},
			address: {
				state: card?.address.state,
				country: card?.address.country,
				city: card?.address.city,
				street: card?.address.street,
				houseNumber: card?.address.houseNumber,
				zip: card?.address.zip,
			},
		},
		validationSchema: yup.object({
			title: yup.string().min(2).max(256).required('Required!'),
			subtitle: yup.string().min(2).max(256).required('Required!'),
			description: yup.string().min(2).max(1024).required('Required!'),
			phone: yup.string().min(9).max(11).required('Required!'),
			email: yup
				.string()
				.min(5)
				.email('Required Valide Email!')
				.required('Required!'),
			web: yup.string().max(14).url(),
			image: yup.object({
				url: yup.string().max(14).url(),
				alt: yup.string().max(2).min(256),
			}),
			address: yup.object({
				state: yup.string(),
				country: yup.string().required('Required!'),
				city: yup.string().required('Required!'),
				street: yup.string().required('Required!'),
				houseNumber: yup.number().required('Required!'),
				zip: yup.number().required('Required!'),
			}),
		}),
		onSubmit: async (values) => {
			try {
				await updateCard(values, token, card._id)
					.then((res) => {
						successMessage('card updated!');
						navigate('/myCards');
						console.log(res.data);
					})
					.catch((err) => {
						console.log(err);
						errorMessage('Failed Card Upload');
					});
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<>
			<div
				className={dark ? 'modalUpdate darkUpdate' : 'modalUpdate'}
				tabIndex='-1'>
				<div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Update Card</h5>
						</div>
						<div className='modal-body'>
							<CardForm formik={formik} />
						</div>

						<div className='modal-footer'>
							<button
								className='btn btn-success createBtn'
								type='submit'
								disabled={formik.dirty || formik.isValid}
								onClick={formik.handleSubmit}>
								Update
							</button>
							<button
								className='btn btn-danger resetBtn'
								onClick={formik.handleReset}>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</>
	);
}

export default UpdateCard;
