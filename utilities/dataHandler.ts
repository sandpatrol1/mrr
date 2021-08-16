interface mrrDataHandlerProperties {
	savingsTotal: string;
	growthMonth: string;
	expensesMonth: string;
	surrenderTresholdTotal: string;
}

function mrrDataHandler({savingsTotal, growthMonth, expensesMonth, surrenderTresholdTotal}: mrrDataHandlerProperties) {
	const mrrData: any = {
		savings: [],
		expencesMth: [],
		growthMth: [],
		surrenderTreshold: [],
		mths: []
	};

	let savingsMth: number = parseFloat(savingsTotal);
	let expensesMth: number = parseFloat(expensesMonth);
	let growthMth: number = parseFloat(growthMonth);
	let surrenderTreshold: number = parseFloat(surrenderTresholdTotal) * expensesMth;
	let mth: number = 1;

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

interface salaryHandlerProperties {
	savingsTotal: string;
	expensesMth: string;
	salaryMth: string;
	salaryIncrease: string;
	savingsMth: string;
}

function salaryHandler({savingsTotal, expensesMth, salaryMth, salaryIncrease, savingsMth}: salaryHandlerProperties) {
	const salaryData: any = {
		savingsTotal: [],
		expensesMth: [],
		salaryMth: [],
		salaryIncrease: [],
		savingsMth: [],
		mths: []
	};

	let savings = parseFloat(savingsTotal);
	let expensesMonth = parseFloat(expensesMth);
	let salaryMonth = parseFloat(salaryMth);
	let salaryIncreaseMonth = parseFloat(salaryIncrease);
	let savingsMonth = parseFloat(savingsMth);
	let mth = 1;

	salaryData.savingsTotal.push(savings);
	salaryData.expensesMth.push(expensesMonth);
	salaryData.salaryMth.push(salaryMonth);
	salaryData.salaryIncrease.push(salaryIncreaseMonth);
	salaryData.savingsMth.push(savingsMonth);
	salaryData.mths.push(mth);

	for (let i = 0; i < 95; i++) {
		salaryMonth = salaryData.salaryMth[i] + salaryIncreaseMonth;
		salaryData.salaryMth.push(salaryMonth);

		salaryData.savingsTotal.push(salaryData.savingsTotal[i] + savingsMonth);

		salaryData.salaryIncrease.push(salaryIncreaseMonth);
		salaryData.expensesMth.push(expensesMonth);

		salaryData.savingsMth.push(savingsMonth);
		salaryData.mths.push(mth++);
	}
	console.log('salaryData', salaryData);
	return salaryData;
}

export {mrrDataHandler, salaryHandler};
