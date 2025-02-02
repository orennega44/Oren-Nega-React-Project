

import '../styles/Register.css';

import { ThemeContext } from '../../hooks/ThemeContext';
import { useContext } from 'react';
function BottomRegister(formik) {
	const { dark } = useContext(ThemeContext);

	return (
		<>
			<div className={dark ? 'bottomRegister darkRegister' : 'bottomRegister'}>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Image Url'
							id='image.url'
							value={formik.formik.values.image.url}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.image && formik.formik.errors.image && (
							<p>{formik.formik.errors.image.url}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='alt'
							id='image.alt'
							value={formik.formik.values.image.alt}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.image && formik.formik.errors.image && (
							<p>{formik.formik.errors.image.alt}</p>
						)}
					</div>
				</div>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='State'
							id='address.state'
							value={formik.formik.values.address.state}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.state}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Country*'
							id='address.country'
							value={formik.formik.values.address.country}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.country}</p>
						)}
					</div>
				</div>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='city*'
							id='address.city'
							value={formik.formik.values.address.city}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.city}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='street*'
							id='address.street'
							value={formik.formik.values.address.street}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						<br />
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.street}</p>
						)}
					</div>
				</div>
				<div className='row g-3'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='House Number*'
							id='address.houseNumber'
							value={formik.formik.values.address.houseNumber}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.houseNumber}</p>
						)}
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Zip'
							id='address.zip'
							value={formik.formik.values.address.zip}
							onChange={formik.formik.handleChange}
							onBlur={formik.formik.handleBlur}
						/>
						{formik.formik.touched.address && formik.formik.errors.address && (
							<p>{formik.formik.errors.address.zip}</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default BottomRegister;
