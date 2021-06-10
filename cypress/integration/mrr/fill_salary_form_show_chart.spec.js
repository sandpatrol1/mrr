describe('Fill salary form show salary chart', () => {
	it('can be filled', () => {
		cy.visit('/');
		cy.get('[data-cy="salary-form-savingsTotal"]').should('be.visible').type(200000);
		cy.get('[data-cy="salary-form-salaryMth"]').should('be.visible').type(20000);
		cy.get('[data-cy="salary-form-expensesMth"]').should('be.visible').type(15000);
		cy.get('[data-cy="salary-form-salaryIncrease"]').should('be.visible').type(1000);
		cy.get('[data-cy="salary-form-savingsMth"]').should('be.visible').type(750);
		cy.get('[data-cy="salary-form-submit"]').click();
		cy.wait(2000);
		cy.get('[data-cy="mrr-chart"]').should('be.visible').and((chart) => {
			expect(chart.height()).to.be.equal(500);
		});
		cy.get('[data-cy="salary-chart"]').toMatchImageSnapshot();
	});
});
