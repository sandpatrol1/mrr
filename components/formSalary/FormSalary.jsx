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
		<form onSubmit={handleSubmit}>
			<Input name="savingsTotal" placeholder="Savings Total" type="number" onChange={handleChange} />
			<Input name="salaryMth" placeholder="Salary Mth" type="number" onChange={handleChange} />
			<Input name="expensesMth" placeholder="Expenses Mth" type="number" onChange={handleChange} />
			<Input name="salaryIncrease" placeholder="Salary Increase Mth" type="number" onChange={handleChange} />
			<Input name="savingsMth" placeholder="Savings Mth" type="number" onChange={handleChange} />
			<Button text="Update Salary" color="Green" />
		</form>
	);
}

export default FormSalary;
