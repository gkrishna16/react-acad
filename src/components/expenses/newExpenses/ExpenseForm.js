import React, { useState } from 'react';
// import './ExpenseForm.css';

const ExpenseForm = (props) => {
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const updateTitle = () => {
		setEnteredTitle('UPDATED');
	};

	const titleChangeHandler = (event) => {
		console.log(event.target.value);
		setEnteredTitle(() => event.target.value);
		// setUserInput((prev) => {
		// 	return { ...prev, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		console.log(event.target.value);
		setEnteredAmount(() => event.target.value);

		// setUserInput((prev) => {
		// 	return { ...prev, enteredAmount: event.target.value };
		// });
	};
	const dateChangeHandler = (event) => {
		console.log(event.target.value);
		setEnteredDate(() => event.target.value);

		// setUserInput((prev) => {
		// 	return { ...prev, enteredDate: event.target.value };
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		// console.log(expenseData);
		setEnteredAmount('');
		setEnteredTitle('');
		setEnteredDate('');
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
					}}
					className="new-expense__controls"
				>
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							onChange={titleChangeHandler}
							value={enteredTitle}
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							min="0.1"
							step="0.01"
							onChange={amountChangeHandler}
							value={enteredAmount}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							min="2019-01-01"
							step="2021-12-31"
							onChange={dateChangeHandler}
							value={enteredDate}
						/>
					</div>
					<div className="new-expense__actions">
						<button type="submit">Add Expenses</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
