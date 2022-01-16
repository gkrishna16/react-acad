import React from 'react';

const ExpenseDate = (props) => {
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();
	const month = props.date.toLocaleString('en-US', { month: 'long' });

	return (
		<div>
			<div>{day}</div>
			<div>{month}</div>
			<div>{year}</div>
		</div>
	);
};

export default ExpenseDate;
