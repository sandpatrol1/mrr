import {motion} from 'framer-motion';
import {useState} from 'react';
import styles from './Wind.module.css';
import useFetchWindData from '../../hooks/useFetchWindData';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import LocationSelect from '../locationSelect/LocationSelect';

const Wind = () => {
	const [ state, setState ] = useState('Copenhagen');
	const [ location, setLocation ] = useState('Copenhagen');
	const {weather, isLoading, isError} = useFetchWindData(location);

	const changeHandler = (event) => {
		setState(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setLocation(state);
	};
	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.searchform}>
				<input type="text" value={state} onChange={changeHandler} />
				<button type="submit">Search</button>
			</form>
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
							// src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
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
