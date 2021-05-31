import {useState, useContext} from 'react';
import styles from './FormMrr.module.css';
import MrrContext from '../mrr/MrrContext';
import mrrDataHandler from '../../utilities/mrrDataHandler';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

function FormMrr() {
	const [ state, setState ] = useState({});
	const {mrrData, updateMrrData} = useContext(MrrContext);

	const handleChange = (event) => {
		setState({...state, [event.target.name]: event.target.value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = mrrDataHandler(state);
		updateMrrData(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input name="savingsTotal" placeholder="Savings" type="number" onChange={handleChange} />
			<Input name="growthMonth" placeholder="Monthly Growth" type="number" onChange={handleChange} />
			<Input name="expensesMonth" placeholder="Monthly Expenses" type="number" onChange={handleChange} />
			<Input
				name="surrenderTresholdTotal"
				placeholder="Surrender Treshold"
				type="number"
				onChange={handleChange}
			/>
			<Button text="Update MRR" color="Green" />
		</form>
	);
}

export default FormMrr;
