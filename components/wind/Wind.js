import {motion} from 'framer-motion';
import styles from './Wind.module.css';
import useFetchWindData from '../../hooks/useFetchWindData';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import {Fragment} from 'react';

const Wind = () => {
	const {weather, isLoading, isError} = useFetchWindData();
	return (
		<div className={styles.container}>
			{isLoading ? (
				<Spinner />
			) : isError ? (
				<Error />
			) : (
				<div className={styles.wrapper}>
					<div className={styles.forecast}>
						<p>{Math.round(weather.main.temp)}°</p>
						<p>{Math.round(weather.wind.speed)} mps</p>
					</div>
					<div className={styles.information}>
						<img
							className={styles.icon}
							src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
							alt="Weather icon"
						/>
						<p className={styles.location}>{weather.name}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Wind;
