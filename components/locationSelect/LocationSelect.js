import styles from './LocationSelect.module.css';

const LocationSelect = ({value}) => {
	return (
		<form>
			<input type="text" value={value} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default LocationSelect;
