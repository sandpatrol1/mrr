import styles from './Header.module.css';

interface TitleProperties {
	title: string;
}

function Header({title}: TitleProperties) {
	return <h1 style={{margin: '5px 0'}}>{title}</h1>;
}

export default Header;
