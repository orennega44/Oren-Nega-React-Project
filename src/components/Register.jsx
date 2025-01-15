/** @format */

function Register() {
	return (
		<>
			<form className='form'>
			<h2>Register</h2>
				<div className='topRegister'>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='First name*'
								aria-label='First name'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='middle Name'
								aria-label='middle Name'
							/>
						</div>
					</div>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Last Name*'
								aria-label='Last Name'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Phone*'
								aria-label='Phone'
							/>
						</div>
					</div>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Email*'
								aria-label='Email'
							/>
						</div>
						<div className='col'>
							<input
								type='password'
								className='form-control'
								placeholder='Password*'
								aria-label='Password'
							/>
						</div>
					</div>
				</div>
				{/* /////////////////////////////// */}
				<div className='bottomRegister'>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Image Url'
								aria-label='Image Url'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Image Alt'
								aria-label='Image Alt'
							/>
						</div>
					</div>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='State'
								aria-label='State'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Country*'
								aria-label='Country'
							/>
						</div>
					</div>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='city*'
								aria-label='city'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='street*'
								aria-label='street'
							/>
						</div>
					</div>
					<div className='row g-3'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='House Number*'
								aria-label='House Number'
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Zip'
								aria-label='Zip'
							/>
						</div>
					</div>
				</div>
				<div className='isBusines'>
					<label htmlFor='isBusines'>
						Do You Want To Register As Busines Account
					</label>
					
					<input
						type='checkbox'
						id='isBusines'
					/>
				</div>
				<button
					className='btn btn-success'
					id="regBtn"
					type='submit'>
					Register
				</button>
			</form>
		</>
	);
}

export default Register;
