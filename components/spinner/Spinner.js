import {motion} from 'framer-motion';
import styles from './Spinner.module.css';

const Spinner = () => {
	const spinTransition = {
		rotate: {
			repeat: Infinity,
			ease: 'linear',
			duration: 1
		},
		scale: {
			duration: 0.5
		}
	};

	return <motion.div className={styles.spinner} animate={{rotate: 360}} transition={spinTransition} />;
};

export default Spinner;
