function mrrData({savingsTotal, growthMonth, expensesMonth, surrenderTresholdTotal}) {
	const mrrData = {
		savings: [],
		expencesMth: [],
		growthMth: [],
		surrenderTreshold: []
	};

	let savingsMth = parseFloat(savingsTotal);
	let expensesMth = parseFloat(expensesMonth);
	let growthMth = parseFloat(growthMonth);
	let surrenderTreshold = parseFloat(surrenderTresholdTotal) * expensesMonth;

	console.log(savingsMth, growthMth, expensesMth, surrenderTreshold);

	mrrData.savings.push(savingsMth);
	mrrData.expencesMth.push(expensesMth);
	mrrData.growthMth.push(growthMth);
	mrrData.surrenderTreshold.push(surrenderTreshold);

	for (let i = 0; i < 95; i++) {
		savingsMth = savingsMth + growthMth - expensesMth;
		mrrData.savings.push(savingsMth);
		mrrData.expencesMth.push(expensesMth);
		mrrData.growthMth.push(growthMth);
		mrrData.surrenderTreshold.push(surrenderTreshold);
	}
	console.log(mrrData);
	return mrrData;
}

export default mrrData;

// const data = {
// 	savings: 100000,
// 	growthMth: 1000,
// 	expensesMth: 10000,
// 	surrenderTreshold: 3
// };

// mrrData: {
//     savings: [],
//     expencesMth: [],
//     growthMth: [],
//     surrenderTreshold: []
// }
