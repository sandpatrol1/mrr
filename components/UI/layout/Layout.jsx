import styles from './Layout.module.css';

function Layout({children}) {
	return (
		<div className={styles.Container}>
			<div>{children}</div>
		</div>
	);
}

export default Layout;
