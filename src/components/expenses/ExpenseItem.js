import React, { useState } from 'react';
import ExpenseDate from './newExpense/ExpenseDate';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const changeTitle = () => {
		setTitle('UPDATED');
	};

	return (
		<div>
			<div
				style={{
					border: '2px solid maroon',
					padding: '10px',
					margin: '2px',
					display: 'flex',
					gap: '10px',
					justifyContent: 'space-between',
				}}
			>
				<ExpenseDate date={props.date} />
				<h5>{title}</h5>
				<div>$ {props.amount}</div>
				<button onClick={changeTitle}>UPDATE TITLE</button>
			</div>
		</div>
	);
};

export default ExpenseItem;
