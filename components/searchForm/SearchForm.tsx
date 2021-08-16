import styles from './SearchForm.module.css';

interface SearchFormProperties {
	handleSubmit: () => void;
	changeHandler: () => void;
	value: string;
}

const SearchForm = ({handleSubmit, changeHandler, value}: SearchFormProperties) => {
	return (
		<form onSubmit={handleSubmit} className={styles.searchform}>
			<input type="text" value={value} onChange={changeHandler} />
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
