import {useState, useContext} from 'react';
import styles from './FormMrr.module.css';
import MrrContext from '../mrr/MrrContext';
import {mrrDataHandler} from '../../utilities/dataHandler';
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
		<form onSubmit={handleSubmit} className={styles.Form} data-cy="mrr-form">
			<Input
				name="savingsTotal"
				placeholder="Savings Total"
				type="number"
				onChange={handleChange}
				dataCy="mrr-form-savingsTotal"
			/>
			<Input
				name="growthMonth"
				placeholder="Growth Mth"
				type="number"
				onChange={handleChange}
				dataCy="mrr-form-growthMonth"
			/>
			<Input
				name="expensesMonth"
				placeholder="Expenses Mth"
				type="number"
				onChange={handleChange}
				dataCy="mrr-form-expensesMonth"
			/>
			<Input
				name="surrenderTresholdTotal"
				placeholder="Surrender Treshold Mths (mths of expenses)"
				type="number"
				onChange={handleChange}
				dataCy="mrr-form-surrenderTresholdTotal"
			/>
			<Button text="Update MRR" color="Green" dataCy="mrr-form-submit" />
		</form>
	);
}

export default FormMrr;
