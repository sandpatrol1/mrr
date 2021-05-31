function mrrDataHandler({savingsTotal, growthMonth, expensesMonth, surrenderTresholdTotal}) {
	const mrrData = {
		savings: [],
		expencesMth: [],
		growthMth: [],
		surrenderTreshold: [],
		mths: []
	};

	let savingsMth = parseFloat(savingsTotal);
	let expensesMth = parseFloat(expensesMonth);
	let growthMth = parseFloat(growthMonth);
	let surrenderTreshold = parseFloat(surrenderTresholdTotal) * expensesMonth;
	let mth = 1;

	mrrData.savings.push(savingsMth);
	mrrData.expencesMth.push(expensesMth);
	mrrData.growthMth.push(growthMth);
	mrrData.surrenderTreshold.push(surrenderTreshold);
	mrrData.mths.push(mth);

	for (let i = 0; i < 95; i++) {
		mrrData.growthMth.push(mrrData.growthMth[mrrData.growthMth.length - 1] + growthMth);
		savingsMth = savingsMth + mrrData.growthMth[i] - expensesMth;
		mrrData.savings.push(savingsMth);
		mrrData.expencesMth.push(expensesMth);
		mrrData.surrenderTreshold.push(surrenderTreshold);
		mrrData.mths.push(mth++);
	}
	console.log('mrrData finished', mrrData);
	return mrrData;
}

export default mrrDataHandler;
