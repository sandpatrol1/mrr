import styles from './Button.module.css';

function Button({text, color, dataCy}) {
	return (
		<button className={[ styles.Button, styles[color] ].join(' ')} data-cy={dataCy}>
			{text}
		</button>
	);
}

export default Button;
