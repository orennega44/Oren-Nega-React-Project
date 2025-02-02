/* eslint-disable react/prop-types */
/** @format */

function UserForm({formik}) {

	
	return (
		<>
			
				<div>
					<div className='row g-3 twosInput'>
						<div className='col eachInput'>
							<input
								type='text'
								className='form-control'
								placeholder='first name*'
								id='name.first'
								value={formik.values.name.first}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.name && formik.errors.name && (
								<p>{formik.errors.name.first}</p>
							)}
						</div>
						<div className='col eachInput'>
							<input
								type='text'
								className='form-control'
								placeholder='middle name'
								id='name.middle'
								value={formik.values.name.middle}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.name && formik.errors.name && (
								<p>{formik.errors.name.middle}</p>
							)}
						</div>
					</div>
					<div className='row g-3 twosInput'>
						<div className='col eachInput'>
							<input
								type='text'
								className='form-control'
								placeholder='last name*'
								id='name.last'
								value={formik.values.name.last}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.name && formik.errors.name && (
								<p>{formik.errors.name.last}</p>
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
								placeholder='url*'
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
								id='iamge.alt'
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

export default UserForm;
