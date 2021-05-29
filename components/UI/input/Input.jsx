import styles from './Input.module.css';

function Input({name, placeholder, type, onChange}) {
	return <input className={styles.Input} name={name} placeholder={placeholder} type={type} onChange={onChange} />;
}

export default Input;
