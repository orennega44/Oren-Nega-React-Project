

import '../styles/Register.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { registerUser } from '../services/UsersService';
import { errorMessage, successMessage } from '../services/feedBackService';
import TopRegister from './TopRegister';
import BottomRegister from './BottomRegister';
import { useNavigate } from 'react-router-dom';
import { LuRefreshCcw } from 'react-icons/lu';
import { useContext } from 'react';
import {ThemeContext} from '../../hooks/ThemeContext'



function Register() {
	const navigate = useNavigate();
	const {dark}= useContext(ThemeContext)
	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');


	const formik = useFormik({
		initialValues: {
			name: {
				first: '',
				middle: '',
				last: '',
			},
			phone: '',
			email: '',
			password: '',
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
			isBusiness: false,
		},
		validationSchema: yup.object({
			name: yup
				.object({
					first: yup
						.string()
						.min(2)
						.max(256)
						.required('First name is required'),
					middle: yup.string().min(2).max(256),
					last: yup.string().min(2).max(256).required('Last name is required'),
				})
				.required(),
			phone: yup
				.string()
				.matches(/^05[0-9]{1}-?[0-9]{7}$/, 'Invalid phone format')
				.min(9)
				.max(11)
				.required('Phone is required'),
			email: yup
				.string()
				.email('Invalid email format')
				.min(5)
				.required('Email is required'),
			password: yup
				.string()
				.min(7, 'Password must be at least 7 characters')
				.max(20, 'Password cannot exceed 20 characters')
				.matches(
					/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-])/,
					'Password must include upper case, lower case, number, and special character',
				)
				.required('Password is required'),
			image: yup
				.object({
					url: yup
						.string()
						.url('Must be a valid URL')
						.min(14, 'URL must be at least 14 characters'),
					alt: yup.string().min(2).max(256),
				})
				.required(),

			address: yup
				.object({
					state: yup.string().min(2).max(256),
					country: yup.string().required().min(2).max(256),
					city: yup.string().required().min(2).max(256),
					street: yup.string().required().min(2).max(256),
					houseNumber: yup
						.number()
						.required()
						.min(2)
						.max(256, 'House number must not exceed 256'),
					zip: yup.number().required().min(2).max(99999),
				})
				.required(),

			isBusiness: yup.boolean().required(),
		}),
		onSubmit: async (values, { resetForm }) => {
			await registerUser(values)
				.then(() => {
					navigate('/login');
					successMessage('User Registered Successfully!');
					successMessage('Please Login!');
				})
				.catch((err) => {
					console.log(err.message);
					errorMessage('Process failed!');
				});
			resetForm();
		},
	});

	return (
		<>
			<form
				className={dark ? 'form darkForm' : 'form'}
				onSubmit={formik.handleSubmit}>
				<h2>Register</h2>
				<TopRegister formik={formik} />
				<BottomRegister formik={formik} />

				<div className={dark ? 'isBusines darkBusiness' : 'isBusines'}>
					<label htmlFor='isBusiness'>
						Do You Want To Register As Busines Account ?
					</label>

					<input
						type='checkbox'
						id='isBusiness'
						name='isBusiness'
						checked={formik.values.isBusiness}
						onChange={(e) => {
							formik.handleChange(e);
							formik.validateForm(e);
						}}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div className='btns'>
					<button
						className='cancelReg btn btn-danger'
						onClick={formik.handleReset}>
						Cancel
					</button>
					<button
						className='refReg btn btn-success'
						onClick={formik.handleReset}>
						<LuRefreshCcw />
					</button>
				</div>
				<button
					className='btn btn-success'
					id='regBtn'
					name='regBtn'
					type='submit'
					disabled={!formik.dirty || !formik.isValid}>
					Register
				</button>
			</form>
		</>
	);
}

export default Register;
