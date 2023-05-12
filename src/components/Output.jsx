import React, { useContext } from 'react';
import MyContext from './MyContext';

function Output() {
	const { state } = useContext(MyContext);

	return (
		<>
			<div className='output-section'>
				<div className='output output-years'>
					<strong>{state.year}</strong> years
				</div>

				<div className='output output-months'>
					<strong>{state.month}</strong> months
				</div>

				<div className='output output-days'>
					<strong>{state.day}</strong> days
				</div>
			</div>
		</>
	);
}

export default Output;
