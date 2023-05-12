import React, { useContext } from 'react';
import moment from 'moment';
import arrowIcon from '../assets/images/icon-arrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyContext from './MyContext';

function Form() {
	const currentYear = moment().year();

	const { dispatch } = useContext(MyContext);

	const formik = useFormik({
		initialValues: {
			day: '',
			month: '',
			year: '',
		},
		validationSchema: Yup.object({
			day: Yup.number()
				.required('This field is Required')
				.min(1, 'Must be a Valid Day!')
				.max(31, 'Must be a Valid Day!'),
			month: Yup.number()
				.required('This field is Required')
				.min(1, 'Must be a Valid Month!')
				.max(12, 'Must be a Valid Month!'),
			year: Yup.number()
				.required('This field is Required')
				.min(1900, 'You cant be that old')
				.max(currentYear, 'Year must be in Past!'),
		}),
		onSubmit: values => {
			dispatch({ type: 'submit', payload: values });
		},
	});

	return (
		<>
			<form className='form' onSubmit={formik.handleSubmit}>
				<div className='input-section'>
					<div>
						<label
							htmlFor='day'
							style={
								formik.errors.day ? { color: 'var(--light-red-color)' } : null
							}>
							DAY
						</label>
						<input
							id='day'
							name='day'
							type='number'
							onChange={formik.handleChange}
							value={formik.values.day}
							style={
								formik.errors.day
									? { border: '2px solid var(--light-red-color)' }
									: null
							}
						/>
						{formik.errors.day ? (
							<p className='error'>{formik.errors.day}</p>
						) : null}
					</div>
					<div>
						<label
							htmlFor='month'
							style={
								formik.errors.month ? { color: 'var(--light-red-color)' } : null
							}>
							MONTH
						</label>
						<input
							id='month'
							name='month'
							type='number'
							onChange={formik.handleChange}
							value={formik.values.month}
							style={
								formik.errors.month
									? { border: '2px solid var(--light-red-color)' }
									: null
							}
						/>
						{formik.errors.month ? (
							<p className='error'>{formik.errors.month}</p>
						) : null}
					</div>
					<div>
						<label
							htmlFor='year'
							style={
								formik.errors.year ? { color: 'var(--light-red-color)' } : null
							}>
							YEAR
						</label>
						<input
							id='year'
							name='year'
							type='number'
							onChange={formik.handleChange}
							value={formik.values.year}
							style={
								formik.errors.year
									? { border: '2px solid var(--light-red-color)' }
									: null
							}
						/>
						{formik.errors.year ? (
							<p className='error'>{formik.errors.year}</p>
						) : null}
					</div>
				</div>

				<div className='submit-section'>
					<hr />
					<button className='btn-submit' type='submit'>
						<img src={arrowIcon} />
					</button>
				</div>
			</form>
		</>
	);
}

export default Form;
