import styles from './Button.module.css';

interface ButtonProperties {
	text: string;
	color: string;
	dataCy: string;
}

function Button({text, color, dataCy}: ButtonProperties) {
	return (
		<button className={[ styles.Button, styles[color] ].join(' ')} data-cy={dataCy}>
			{text}
		</button>
	);
}

export default Button;
