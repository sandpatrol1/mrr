import {useState} from 'react';
import MrrContext from './MrrContext';
import styles from './Mrr.module.css';
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

	function updateMrrData(data: any) {
		setMrrData(data);
	}

	function updateSalaryData(data: any) {
		setSalaryData(data);
	}

	return (
		<MrrContext.Provider value={{mrrData, updateMrrData, salaryData, updateSalaryData}}>
			<div className={styles.MrrH1}>
				<p>
					<strong>
						Calculate personal savings based on assumptions for MRR (monthly recurring revenue) going
						independent versus working in a salaried job.
					</strong>
					<br />
					<br />
					The concept of this app comes from the Excel spreadsheet{' '}
					<a href="https://github.com/dvassallo/bootstrapping-calculator" target="blank">
						The Bootstrapping Calculator
					</a>{' '}
					by Daniel Vassallo used to inform the decision if bootstrapping his business could be successful.
					This app has an additional chart visualizing future savings working on a regular salary.
					<br />
					<br />
					The app does not pretend to be a budgeting tool, but only visualizes impact of different assumptions
					on income and savings.
					<br />
					<br />
					Made with &#128154; & JavaScript in {' '}
					<a href="https://micheljorgensen.com/" target="blank">
						Copenhagen
					</a>
				</p>
			</div>
			<div className={styles.MrrH1}>
				<h2>Calculate MRR Savings</h2>
			</div>
			<div className={styles.Mrr}>
				<FormMrr />
				<ChartMrr />
			</div>
			<div className={styles.MrrH1}>
				<h2>Calculate Salary Savings</h2>
			</div>
			<div className={styles.Mrr}>
				<FormSalary />
				<ChartSalary />
			</div>
		</MrrContext.Provider>
	);
}

export default Mrr;
