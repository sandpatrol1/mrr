import {motion} from 'framer-motion';
import styles from './Wind.module.css';
import useFetchWindData from '../../hooks/useFetchWindData';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const Wind = () => {
	const {weather, isLoading, isError} = useFetchWindData();
	return (
		<div className={styles.container}>
			{isLoading ? (
				<Spinner />
			) : isError ? (
				<Error />
			) : (
				<div>
					<motion.div
						className={styles.con}
						initial={{scale: 0}}
						animate={{rotate: 360, scale: 1}}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20
						}}
					>
						<div className={styles.wind}>
							<h2 className={styles.location}>{weather.name}</h2>
							<h2>{weather.wind.speed}</h2>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Wind;
