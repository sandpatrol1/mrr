import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import FormMrr from '../formMrr/FormMrr';

function Mrr() {
	return (
		<MrrContext.Provider
			value={{
				mrrData: {}
			}}
		>
			<div className={styles.Mrr}>
				<FormMrr />
				<div>Charts</div>
			</div>
		</MrrContext.Provider>
	);
}

export default Mrr;
