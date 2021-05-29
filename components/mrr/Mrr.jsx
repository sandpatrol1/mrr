import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import FormMrr from '../formMrr/FormMrr';
import ChartMrr from '../chartMrr/ChartMrr';

function Mrr() {
	return (
		<MrrContext.Provider
			value={{
				mrrData: {}
			}}
		>
			<div className={styles.Mrr}>
				<FormMrr />
				<ChartMrr />
			</div>
		</MrrContext.Provider>
	);
}

export default Mrr;
