import styles from './Wind.module.css';
import useFetchWindData from '../../hooks/useFetchWindData';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const Wind = () => {
	const {weather, isLoading, isError} = useFetchWindData();
	return (
		<div className={styles.wind}>
			{isLoading ? (
				<Spinner />
			) : isError ? (
				<Error />
			) : (
				<div>
					<div>{weather.name}</div>
					<div>{weather.main.temp}</div>
					<div>{weather.wind.speed}</div>
				</div>
			)}
		</div>
	);
};

export default Wind;
