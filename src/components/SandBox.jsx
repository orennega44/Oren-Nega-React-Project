/** @format */

import { useContext, useEffect, useState } from 'react';
import '../styles/Sandbox.css';
import { deleteUser, getAllUsers } from '../services/UsersService';
import { UserStatus } from '../../hooks/TokenContext';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { errorMessage, successMessage } from '../services/feedBackService';

import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../hooks/ThemeContext';
function SandBox() {
	const [allUsers, setAllUsers] = useState([]);
	const { token, decodedToken } = useContext(UserStatus);
	const [isPannding, setIsPannding] = useState(false);
	const { dark } = useContext(ThemeContext);
	const navigate = useNavigate();

	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');

	useEffect(() => {
		if (decodedToken && decodedToken.isAdmin) {
			setIsPannding(true);
			try {
				getAllUsers(token)
					.then((res) => setAllUsers(res.data))
					.catch((err) => console.log(err));
			} catch (error) {
				console.log(error);
			}
			setIsPannding(false);
		}
	}, [token,decodedToken]);

	const handleUpdate = (userId) => {
		navigate(`/updateuser/${userId}`);
	};

	const handleDelete = async (userId) => {
		

		if (confirm('are you sure you want to delete that user?')){ 
			try {
				await deleteUser(userId, token)
					.then((res) => {
						successMessage('user deleted successfuly! '), navigate("/sandbox"),
						console.log(res.data);
					})
					.catch((err) => {
						errorMessage('failed deleting user'), console.log(err);
					});
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			{isPannding ? (
				<div
					className='spinner-border text-primary'
					role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : (
				<div className='sandContainer'>
					<h1>admin SANDBOX</h1>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>#id</th>
								<th scope='col'>name</th>
								<th scope='col'>profile</th>
								<th scope='col'>email</th>
								<th scope='col'>action</th>
							</tr>
						</thead>
						<tbody>
							{allUsers.map((user) => (
								<tr key={user._id}>
									<td>{user._id}</td>
									<td>
										{user.name.first} {user.name.middle}
										{user.name.last}
									</td>
									<td>
										{
											<NavLink to={`/userprofile/${user._id}`}>
												go to profile
											</NavLink>
										}
									</td>
									<td>{user.email}</td>
									<td className='actions'>
										<span onClick={() => handleDelete(user._id)}>
											<MdDeleteForever />
										</span>
										<span onClick={() => handleUpdate(user._id)}>
											<FaPen />
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}

export default SandBox;
