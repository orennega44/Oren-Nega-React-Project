

import '../styles/ModalContent.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createCard } from '../services/CardsService';
import CardForm from '../../validators/cards/CardForm';
import { errorMessage, successMessage } from '../services/feedBackService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserStatus } from '../../hooks/TokenContext';
import { ThemeContext } from '../../hooks/ThemeContext';

function ModalContent({ show, handleClose }) {
	const navigate = useNavigate();
	const {token} = useContext(UserStatus);
	const {dark} =useContext(ThemeContext)
	
	

	const formik = useFormik({
		initialValues: {
			title: '',
			subtitle: '',
			description: '',
			phone: '',
			email: '',
			web: '',
			image: {
				url: '',
				alt: '',
			},
			address: {
				state: '',
				country: '',
				city: '',
				street: '',
				houseNumber: '',
				zip: '',
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
				url: yup.string().min(14).url(),
				alt: yup.string().min(2).max(256),
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
		onSubmit: async (values, { resetForm }) => {
			await createCard(values,token)
				.then((res) =>{
						successMessage('card added successfuly!');
					handleClose();
					navigate('/myCards');
					console.log(res)
				
				}
				)
				.catch((err) =>{ console.log(err)
					errorMessage("Failed Card Upload")
				});

		
			
			navigate('/myCards');

			resetForm();
		},
	});
	return (
		<>
			<div
				className={`modal fade ${show ? 'show d-block' : ''}`}
				tabIndex='-1'
				style={{ background: show ? 'rgba(0,0,0,0.5)' : 'none' }}>
				<div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className={dark ? 'modal-content darkModal' : 'modal-content'}>
						<div className='modal-header'>
							<h5 className='modal-title'>Create New Card</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={handleClose}></button>
						</div>
						<div className='modal-body'>
							<CardForm formik={formik} />
						</div>

						<div className='modal-footer'>
							<button
								className='btn btn-success createBtn'
								type='submit'
								disabled={!formik.dirty || !formik.isValid}
								onClick={formik.handleSubmit}>
								Create
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
		</>
	);
}

export default ModalContent;
