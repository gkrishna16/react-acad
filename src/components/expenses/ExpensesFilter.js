import React from 'react';

const ExpensesFilter = (props) => {
	const dropDownChangeHandler = (event) => {
		console.log(event.target.value);
		props.filterChange(event.target.value);
	};

	return (
		<div>
			<div>
				<label>Filter By</label>
				<select value={props.selected} onChange={dropDownChangeHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
