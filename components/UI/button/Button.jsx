import styles from './Button.module.css';

function Button({text, color}) {
	return <button className={[ styles.Button, styles[color] ].join(' ')}>{text}</button>;
}

export default Button;
