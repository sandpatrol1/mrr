import styles from './SearchForm.module.css';

const SearchForm = ({handleSubmit, changeHandler, value}) => {
	return (
		<form onSubmit={handleSubmit} className={styles.searchform}>
			<input type="text" value={value} onChange={changeHandler} />
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
