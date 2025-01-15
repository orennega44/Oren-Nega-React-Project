/** @format */

function Login() {
	return (
		<>
			<form className='loginForm'>
				<h2>Login</h2>
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

				<button
				id="loginBtn"
					className='btn btn-success'
					type='submit'>
					Login
				</button>
			</form>
		</>
	);
}

export default Login;
