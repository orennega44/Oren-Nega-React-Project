/** @format */

import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { getUserById, updateUser } from '../services/UsersService';
import { UserStatus } from '../../hooks/TokenContext';
import { successMessage } from '../services/feedBackService';
import UserForm from '../../validators/users/UserForm';

function UserUpdate() {
	const { id } = useParams();
	const { token, decodedToken } = useContext(UserStatus);
	const [oldUser, setOldUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (decodedToken._id === id || decodedToken.isAdmin) {
			try {
				getUserById(id, token)
					.then((res) => setOldUser(res.data))
					.catch((err) => console.log(err));
			} catch (error) {
				console.log(error);
			}
		}
	}, [token, decodedToken, id]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: {
				first: oldUser?.name?.first || '',
				middle: oldUser?.name?.middle || '',
				last: oldUser?.name?.last || '',
			},
			phone: oldUser?.phone || '',
			image: {
				url: oldUser?.image?.url || '',
				alt: oldUser?.image?.alt || '',
			},
			address: {
				state: oldUser?.address?.state || '',
				country: oldUser?.address?.country || '',
				city: oldUser?.address?.city || '',
				street: oldUser?.address?.street || '',
				houseNumber: oldUser?.address?.houseNumber || '',
				zip: oldUser?.address?.zip || '',
			},
		},
		validationSchema: yup.object({
			name: yup.object({
				first: yup.string().min(2).max(256).required('required!'),
				middle: yup.string().min(2).max(256),
				last: yup.string().min(2).max(256).required('required!'),
			}),
			phone: yup.string().min(9).max(11).required('required!'),
			image: yup.object({
				url: yup.string().min(14).url().required('required!'),
				alt: yup.string().min(2).max(256).required('required!'),
			}),
			address: yup.object({
				state: yup.string().min(2).max(256),
				country: yup.string().min(2).max(256).required('required!'),
				city: yup.string().min(2).max(256).required('required!'),
				street: yup.string().min(2).max(256).required('required!'),
				houseNumber: yup.string().min(2).max(256).required('required!'),
				zip: yup.string().min(2).max(256).required('required!'),
			}),
		}),
		onSubmit: async (values) => {
			if (decodedToken.isAdmin || decodedToken._id === id) {
				try {
					await updateUser(oldUser._id, token, values)
						.then(() => {
							successMessage('user Updated succesfuly');
							navigate(-1);

						})
						.catch((err) => console.log(err));
				} catch (error) {
					console.log(error);
				}
			}
		},
	});
	
	

	return (
		<>
			<UserForm formik={formik} />

			<div className='modal-footer'>
				<button
					className='btn btn-success createBtn'
					type='submit'
					disabled={!formik.isValid}
					onClick={formik.handleSubmit}>
					Update
				</button>
				<button
					className='btn btn-danger resetBtn'
					onClick={formik.handleReset}>
					Reset
				</button>
			</div>
		</>
	);
}

export default UserUpdate;
