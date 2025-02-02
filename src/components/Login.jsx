/** @format */
import { useFormik } from 'formik';
import '../styles/Login.css';
import * as yup from 'yup';
import { userLogin } from '../services/UsersService';
import { errorMessage, successMessage } from '../services/feedBackService';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { UserStatus } from '../../hooks/TokenContext';
import { ThemeContext } from '../../hooks/ThemeContext';

function Login() {
	const { login } = useContext(UserStatus);
	const { dark } = useContext(ThemeContext);
	const navigate = useNavigate();

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: yup.object({
			email: yup.string().email().required('Must have a Valide Email').min(5),
			password: yup
				.string()
				.min(7, 'Password must have 7 characters')
				.max(20, 'Password cannot exceed 20 characters')
				.matches(
					/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-])/,
					'Password must include upper case, lower case, number, and special character',
				)
				.required('Password is required'),
		}),
		onSubmit: (values, { resetForm }) => {
			userLogin(values)
				.then((res) => {
					if (!localStorage.getItem('token')) {
						login(res.data);
						localStorage.setItem('token', JSON.stringify(res.data));
						navigate('/');
						successMessage('You Are Logged In!');
					}
				})
				.catch((err) => {
					console.log(err);
					errorMessage('Login Failed,Please Try Again!');
				})
				.finally(resetForm());
		},
	});

	return (
		<>
			<form
				className={dark ?"loginForm darkLogin" :'loginForm'}
				onSubmit={formik.handleSubmit}>
				<h2>Login</h2>
				<div
					className='row g-3'
					id='loginInput'>
					<div
						className='col'
						id='logEmail'>
						<input
							type='text'
							className='form-control'
							placeholder='Email'
							id='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.touched.email && formik.errors.email && (
							<p className='logPara'>{formik.errors.email}</p>
						)}
					</div>
					<div
						className='col'
						id='logPassword'>
						<input
							type='password'
							className='form-control'
							placeholder='Password'
							id='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.touched.password && formik.errors.password && (
							<p className='logPara'>{formik.errors.password}</p>
						)}
					</div>
				</div>

				<button
					id='loginBtn'
					className='btn btn-success'
					type='submit'
					disabled={!formik.dirty || !formik.isValid}>
					Login
				</button>
			</form>
		</>
	);
}

export default Login;
