import React from 'react';
import moment from 'moment';
import arrowIcon from '../assets/images/icon-arrow.svg';

function Form() {
	const currentYear = moment().year();

	return (
		<>
			<form className='form'>
				<div className='input-section'>
					<div>
						<label htmlFor='day'>DAY</label>
						<input type='number' max={31} />
					</div>
					<div>
						<label htmlFor='month'>MONTH</label>
						<input type='number' max={12} />
					</div>
					<div>
						<label htmlFor='year'>YEAR</label>
						<input type='number' max={currentYear} />
					</div>
				</div>

				<div className='submit-section'>
					<hr />
					<button className='btn-submit'>
						<img src={arrowIcon} />
					</button>
				</div>
			</form>
		</>
	);
}

export default Form;
