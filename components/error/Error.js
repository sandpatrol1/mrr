import Image from 'next/image';
import styles from './Error.module.css';

const Error = () => {
	return (
		<div className={styles.error}>
			<p>Error...</p>
			{/* <Image
				className={styles.errorImage}
				src="/typewriter-close-up.jpg"
				alt="Typewriter"
				width={350}
				height={350}
			/> */}
		</div>
	);
};

export default Error;
