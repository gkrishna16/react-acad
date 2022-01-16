import React, { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses.js';
import NewExpense from './components/expenses/newExpense/NewExpense';
const DUMMY_ARRAY = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [givenArr, setGivenArr] = useState(DUMMY_ARRAY);

	const addExpenseHandler = (expense) => {
		console.log('in app.js');
		console.log(expense);

		try {
			setGivenArr((prev) => {
				return [expense, ...prev];
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={givenArr} />
		</div>
	);
};

export default App;
