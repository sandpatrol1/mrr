import {useState} from 'react';
import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import Header from '../UI/header/Header';
import FormMrr from '../formMrr/FormMrr';
import ChartMrr from '../chartMrr/ChartMrr';

function Mrr() {
	const [ mrrData, setMrrData ] = useState({
		savings: [],
		expencesMth: [],
		growthMth: [],
		surrenderTreshold: [],
		mths: []
	});

	function updateMrrData(data) {
		setMrrData(data);
	}

	return (
		<MrrContext.Provider value={{mrrData, updateMrrData}}>
			<div className={styles.MrrH1}>
				<Header title="Monthly Recurring Revenue Calculator" />
			</div>
			<div className={styles.Mrr}>
				<FormMrr />
				<ChartMrr />
			</div>
		</MrrContext.Provider>
	);
}

export default Mrr;
