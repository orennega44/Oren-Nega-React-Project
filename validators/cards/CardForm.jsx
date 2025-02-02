/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import '../../src/styles/ModalContent.css';
function CardForm({ formik }) {
	return (
		<>
			<div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='title*'
							id='title'
							value={formik.values.title}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.title && formik.errors.title && (
							<p>{formik.errors.title}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='subtitle*'
							id='subtitle'
							value={formik.values.subtitle}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.subtitle && formik.errors.subtitle && (
							<p>{formik.errors.subtitle}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='description*'
							id='description'
							value={formik.values.description}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.description && formik.errors.description && (
							<p>{formik.errors.description}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='Phone*'
							id='phone'
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.phone && formik.errors.phone && (
							<p>{formik.errors.phone}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='Email*'
							id='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email && (
							<p>{formik.errors.email}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='web'
							id='web'
							value={formik.values.web}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.web && formik.errors.web && (
							<p>{formik.errors.web}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='url'
							id='image.url'
							value={formik.values.image.url}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.image && formik.errors.image && (
							<p>{formik.errors.image.url}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='alt'
							id='image.alt'
							value={formik.values.image.alt}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.image && formik.errors.image && (
							<p>{formik.errors.image.alt}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='state'
							id='address.state'
							value={formik.values.address.state}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.state}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='country*'
							id='address.country'
							value={formik.values.address.country}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.country}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='city*'
							id='address.city'
							value={formik.values.address.city}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.city}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='street*'
							id='address.street'
							value={formik.values.address.street}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.street}</p>
						)}
					</div>
				</div>
				<div className='row g-3 twosInput'>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='houseNumber*'
							id='address.houseNumber'
							value={formik.values.address.houseNumber}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.houseNumber}</p>
						)}
					</div>
					<div className='col eachInput'>
						<input
							type='text'
							className='form-control'
							placeholder='zip*'
							id='address.zip'
							value={formik.values.address.zip}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<p>{formik.errors.address.zip}</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default CardForm;
