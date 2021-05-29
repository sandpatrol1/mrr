import {useState, useContext} from 'react';
import styles from './FormMrr.module.css';
import MrrContext from '../mrr/MrrContext';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

function FormMrr() {
	const [ state, setState ] = useState({});
	const mrrContext = useContext(MrrContext);

	const handleChange = (event) => {
		setState({...state, [event.target.name]: event.target.value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		mrrContext.mrrData = state;
		console.log(mrrContext.mrrData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input name="growth" placeholder="Monthly Growth" type="number" onChange={handleChange} />
			<Input name="savings" placeholder="Savings" type="number" onChange={handleChange} />
			<Button text="Update MRR" color="Green" />
		</form>
	);
}

export default FormMrr;
