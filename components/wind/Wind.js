import styles from './Wind.module.css';
import useFetchWindData from '../../hooks/useFetchWindData';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const Wind = () => {
	const {user, isLoading, isError} = useFetchWindData();
	return <div className={styles.wind}>{isLoading ? <Spinner /> : isError ? <Error /> : <div>{user.name}</div>}</div>;
};

export default Wind;
