import useSWR from 'swr';
import fetcher from '../utilities/fetcher';

// /.netlify/functions/hello

const useFetchWindData = (location) => {
	const {data, error} = useSWR(`/.netlify/functions/weather`, fetcher);

	return {
		weather: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useFetchWindData;
