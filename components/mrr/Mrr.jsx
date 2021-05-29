import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import FormMrr from '../formMrr/FormMrr';
import ChartMrr from '../chartMrr/ChartMrr';

function Mrr() {
	return (
		<MrrContext.Provider
			value={{
				mrrData: {
					savings: [ 0, 8, 9, 9, 10 ],
					growth: [ 1, 3, 9, 9, 11 ]
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
