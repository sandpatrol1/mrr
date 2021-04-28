import useSWR from 'swr';
import fetcher from '../utilities/fetcher';

const useFetchWindData = (location) => {
	const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/users/1`, fetcher);

	return {
		user: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useFetchWindData;
