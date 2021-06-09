import {useState, useContext} from 'react';
import styles from './FormSalary.module.css';
import MrrContext from '../mrr/MrrContext';
import {salaryHandler} from '../../utilities/mrrDataHandler';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

function FormSalary() {
	const [ state, setState ] = useState({});
	const {salaryData, updateSalaryData} = useContext(MrrContext);

	const handleChange = (event) => {
		setState({...state, [event.target.name]: event.target.value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = salaryHandler(state);
		updateSalaryData(data);
	};

	return (
		<form onSubmit={handleSubmit} className={styles.Form} data-cy="salary-form">
			<Input
				name="savingsTotal"
				placeholder="Savings Total"
				type="number"
				onChange={handleChange}
				dataCy="salary-form-savingsTotal"
			/>
			<Input
				name="salaryMth"
				placeholder="Salary Mth"
				type="number"
				onChange={handleChange}
				dataCy="salary-form-salaryMth"
			/>
			<Input
				name="expensesMth"
				placeholder="Expenses Mth"
				type="number"
				onChange={handleChange}
				dataCy="salary-form-expensesMth"
			/>
			<Input
				name="salaryIncrease"
				placeholder="Salary Increase Mth"
				type="number"
				onChange={handleChange}
				dataCy="salary-form-salaryIncrease"
			/>
			<Input
				name="savingsMth"
				placeholder="Savings Mth"
				type="number"
				onChange={handleChange}
				dataCy="salary-form-savingsMth"
			/>
			<Button text="Update Salary" color="Green" dataCy="salary-form-submit" />
		</form>
	);
}

export default FormSalary;
