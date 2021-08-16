import {Fragment} from 'react';
import styles from './Input.module.css';

interface InputProperties {
	name: string;
	placeholder: string;
	type: string;
	onChange: () => void;
	dataCy: string;
}

function Input({name, placeholder, type, onChange, dataCy}: InputProperties) {
	return (
		<Fragment>
			<label className={styles.Label} htmlFor={name}>
				{placeholder}
			</label>
			<input
				className={styles.Input}
				name={name}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				data-cy={dataCy}
			/>
		</Fragment>
	);
}

export default Input;
