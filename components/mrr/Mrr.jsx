import {useState} from 'react';
import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
import Header from '../UI/header/Header';
import FormMrr from '../formMrr/FormMrr';
import ChartMrr from '../chartMrr/ChartMrr';
import FormSalary from '../formSalary/FormSalary';
import ChartSalary from '../chartSalary/ChartSalary';

function Mrr() {
	const [ mrrData, setMrrData ] = useState({
		savings: [],
		expencesMth: [],
		growthMth: [],
		surrenderTreshold: [],
		mths: []
	});

	const [ salaryData, setSalaryData ] = useState({
		savingsTotal: [],
		expensesMth: [],
		salaryMth: [],
		salaryIncrease: [],
		savingsMth: [],
		mths: []
	});

	function updateMrrData(data) {
		setMrrData(data);
	}

	function updateSalaryData(data) {
		setSalaryData(data);
	}

	return (
		<MrrContext.Provider value={{mrrData, updateMrrData, salaryData, updateSalaryData}}>
			<div className={styles.MrrH1}>
				<Header title="Monthly Recurring Revenue Calculator" />
			</div>
			<div className={styles.Mrr}>
				<FormMrr />
				<ChartMrr />
			</div>
			<div className={styles.Mrr}>
				<FormSalary />
				<ChartSalary />
			</div>
		</MrrContext.Provider>
	);
}

export default Mrr;
