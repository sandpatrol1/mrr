import {motion} from 'framer-motion';
import styles from './Spinner.module.css';

const Spinner = () => {
	return (
		<motion.div
			className={styles.spinner}
			animate={{x: [ 0, 100, 0, -100, 0 ], rotate: 360}}
			transition={{duration: 3, loop: Infinity, ease: 'linear'}}
		/>
	);
};

export default Spinner;
