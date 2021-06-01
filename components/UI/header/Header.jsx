import styles from './Header.module.css';

function Header({title}) {
	return <h1 style={{margin: '5px 0'}}>{title}</h1>;
}

export default Header;
