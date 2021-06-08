import {useState, useContext} from 'react';
import {Line} from 'react-chartjs-2';
import styles from './ChartSalary.module.css';
import MrrContext from '../mrr/MrrContext';

function ChartSalary() {
	const mrrContext = useContext(MrrContext);

	const data = {
		labels: mrrContext.salaryData.mths,
		datasets: [
			{
				label: 'Savings',
				data: mrrContext.salaryData.savingsTotal,
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10
			},
			{
				label: 'Expenses',
				data: mrrContext.salaryData.expensesMth,
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(255,99,132,0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: 'rgba(255,99,132,1)',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(255,99,132,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10
			}
		]
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						min: 0
					}
				}
			]
		},
		responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 2
	};

	return (
		<div className={styles.ChartWrapper}>
			<Line data={data} options={options} />
		</div>
	);
}

export default ChartSalary;
