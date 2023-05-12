import Form from './components/Form';
import Output from './components/Output';
import MyContext from './components/MyContext';
import { useReducer } from 'react';
import moment from 'moment';

const initialState = {};

function reducer(state, action) {
	const calculate = () => {
		const currentDate = moment();

		const dateToSubtract = `${action.payload.day}-${action.payload.month}-${action.payload.year}`;
		const momentDateToSubtract = moment(dateToSubtract, 'DD-MM-YYYY');

		const diffInDays = currentDate.diff(momentDateToSubtract, 'days');
		const diffInMonths = currentDate.diff(momentDateToSubtract, 'months');
		const diffInYears = currentDate.diff(momentDateToSubtract, 'years');

		const diffInActualMonths = diffInMonths - diffInYears * 12;
		const diffInActualDays =
			diffInDays - convertMonthsToDays(diffInActualMonths + diffInYears * 12);
		console.log(convertMonthsToDays(diffInActualMonths + diffInYears * 12));

		function convertMonthsToDays(monthies) {
			const startDate = moment();
			const endDate = moment(startDate).add(monthies, 'M');
			const diffInDays = endDate.diff(startDate, 'days');
			return diffInDays;
		}

		return {
			day: diffInActualDays,
			month: diffInActualMonths,
			year: diffInYears,
		};
	};

	switch (action.type) {
		case 'submit': {
			let calculatedDate = calculate();
			return calculatedDate;
		}
		default:
			return {};
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<main>
			<div className='calculator'>
				<MyContext.Provider value={{ state, dispatch }}>
					<Form />
					<Output />
				</MyContext.Provider>
			</div>
		</main>
	);
}

export default App;
