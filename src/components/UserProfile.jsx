/** @format */

import { useContext, useEffect, useState } from 'react';
import '../styles/UserProfile.css';
import { deleteUser, getUserById, updateUsersBusinessStatus } from '../services/UsersService';
import { useNavigate, useParams } from 'react-router-dom';
import { UserStatus } from '../../hooks/TokenContext';
import { ThemeContext } from '../../hooks/ThemeContext';
import { errorMessage, successMessage } from '../services/feedBackService';

function UserProfile() {
	const { id } = useParams();
	const { token, decodedToken } = useContext(UserStatus);
	const { dark } = useContext(ThemeContext);
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	useEffect(() => {
		if (id === decodedToken._id || decodedToken.isAdmin === true) {
			try {
				getUserById(id, token)
					.then((res) => setUser(res.data))
					.catch((err) => console.log(err));
			} catch (error) {
				console.log(error);
			}
		}
	}, [decodedToken._id,token]);

	const handleBusinessStatus= async(userId)=>{
		try {
			await updateUsersBusinessStatus(userId,token).then((res)=> {console.log(res.data),successMessage("user business status changed!");
			}).catch((err)=>{console.log(err),
				errorMessage("falied changing business status")
			})
		} catch (error) {
console.log(error)

		}

	}

	const handleDelete = async (userId) => {
		if (id === decodedToken._id) {
			if (confirm('are you sure you want to delete the account?')) {
				try {
					await deleteUser(userId, token)
						.then((res) => {
							successMessage('account deleted successfuly! '),
								localStorage.removeItem('token');
							navigate('/'), console.log(res.data);
						})
						.catch((err) => {
							errorMessage('failed deleting user'), console.log(err);
						});
				} catch (error) {
					console.log(error);
				}
			}
		} else if (decodedToken.isAdmin) {
			if (confirm('are you sure you want to delete that user?')) {
				try {
					await deleteUser(userId, token)
						.then((res) => {
							successMessage('user deleted successfuly! '),
								navigate('/sandbox'),
								console.log(res.data);
						})
						.catch((err) => {
							errorMessage('failed deleting user'), console.log(err);
						});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};

	return (
		<>
			<div
				className={dark ? 'profileContainer darkProfile' : 'profileContainer'}>
				<div className='userDit'>
					<h1>userProfile</h1>
					<h2>
						name: {user?.name?.first} {user?.name?.middle} {user?.name?.last}
					</h2>
					<img
						src={user?.image?.url}
						alt={user?.image?.alt}
					/>
					<p>phone: {user?.phone}</p>
					<p>email: {user?.email}</p>
				</div>

				<div className='userAddress'>
					<p>
						address: {user?.address?.street} {user?.address?.houseNumber}{' '}
						{user?.address?.city}
					</p>
					<p>country: {user?.address?.country}</p>
					<p>zip: {user?.address?.zip}</p>

					<span>
						{(decodedToken._id === id || decodedToken.isAdmin) && (
							<button
								className='btn btn-danger'
								onClick={() => handleDelete(user._id)}>
								Delete Account
							</button>
						)}
						{decodedToken.isBusiness === false && (
							<button
								className='btn btn-primary'
								onClick={() => handleBusinessStatus(user._id)}>
								become a business user
							</button>
						)}
					</span>
				</div>
			</div>
		</>
	);
}

export default UserProfile;
