import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpenseDate from './newExpense/ExpenseDate';

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState('2020');

	console.log(props.expenses);

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const updatedExpenses = props.expenses.filter((expns) => {
		return expns.date.getFullYear().toString() === filterYear;
	});

	console.log(updatedExpenses);

	return (
		<div>
			<div>
				<ExpensesFilter
					selected={filterYear}
					filterChange={filterChangeHandler}
				/>

				{updatedExpenses.length === 0 ? (
					<p>Nothing found for this year.</p>
				) : (
					updatedExpenses.map((expense) => {
						return (
							<div>
								<ExpenseItem
									key={expense.id}
									title={expense.title}
									amount={expense.amount}
									date={expense.date}
								/>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Expenses;
