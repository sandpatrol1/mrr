import {useState, useContext} from 'react';
import {Line} from 'react-chartjs-2';
import styles from './ChartMrr.module.css';
import MrrContext from '../mrr/MrrContext';

function ChartMrr() {
	const mrrContext = useContext(MrrContext);

	//     mrrData: {
	//     savings: [],
	//     expencesMth: [],
	//     growthMth: [],
	//     surrenderTreshold: []
	// }

	console.log('chart', mrrContext.mrData);

	const data = {
		labels: [ '1', '2', '3', '4', '5', '6' ],
		datasets: [
			{
				label: 'Savings',
				data: mrrContext.mrrData.savings,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)'
			},
			{
				label: 'Surrender',
				data: mrrContext.mrrData.surrenderTreshold,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(203, 239, 141)'
			}
		]
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};

	return (
		<div>
			<Line data={data} options={options} width={400} height={200} />
		</div>
	);
}

export default ChartMrr;
