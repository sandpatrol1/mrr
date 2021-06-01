import {Fragment} from 'react';
import styles from './Input.module.css';

function Input({name, placeholder, type, onChange}) {
	return (
		<Fragment>
			<label className={styles.Label} htmlFor={name}>
				{placeholder}
			</label>
			<input className={styles.Input} name={name} placeholder={placeholder} type={type} onChange={onChange} />
		</Fragment>
	);
}

export default Input;
