describe('The App', () => {
	it('renders correctly', () => {
		cy.visit('/');
		cy.contains('MRR vs. Salary - Savings Calculator');
	});
});
