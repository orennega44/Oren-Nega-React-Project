/** @format */

import '../styles/Register.css';
import { ThemeContext } from '../../hooks/ThemeContext';
import { useContext } from 'react';

function TopRegister(formik) {
	
	const { dark } = useContext(ThemeContext);
	return (
		<>
			<div className={dark?'topRegister darkRegister' : "topRegister"}>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='First name*'
							id='name.first'
							value={formik.formik.values.name.first}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.name && formik.formik.errors.name && (
							<p>{formik.formik.errors.name.first}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='middle Name'
							id='name.middle'
							value={formik.formik.values.name.middle}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.name && formik.formik.errors.name && (
							<p>{formik.formik.errors.name.middle}</p>
						)}
					</div>
				</div>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Last Name*'
							id='name.last'
							value={formik.formik.values.name.last}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.name && formik.formik.errors.name && (
							<p>{formik.formik.errors.name.last}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Phone*'
							id='phone'
							value={formik.formik.values.phone}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.phone && formik.formik.errors.phone && (
							<p>{formik.formik.errors.phone}</p>
						)}
					</div>
				</div>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Email*'
							id='email'
							value={formik.formik.values.email}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.email && formik.formik.errors.email && (
							<p>{formik.formik.errors.email}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='password'
							className='form-control'
							placeholder='Password*'
							id='password'
							value={formik.formik.values.password}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.password && formik.formik.errors.password && (
							<p>{formik.formik.errors.password}</p>
						)}
					</div>
				</div>
				
			</div>
		</>
	);
}

export default TopRegister;
