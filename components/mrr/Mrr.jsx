import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import FormMrr from '../formMrr/FormMrr';
import ChartMrr from '../chartMrr/ChartMrr';
import mrrData from 'utilities/mrrData';

function Mrr() {
	return (
		<MrrContext.Provider
			value={{
				mrrData: {
					savings: [],
					expencesMth: [],
					growthMth: [],
					surrenderTreshold: []
				}
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
