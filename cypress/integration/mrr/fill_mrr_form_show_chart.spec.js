describe('Fill MRR form show MRR chart', () => {
	it('can be filled', () => {
		cy.visit('/');
		cy.get('[data-cy="mrr-form-savingsTotal"]').should('be.visible').type(200000);
		cy.get('[data-cy="mrr-form-growthMonth"]').should('be.visible').type(2000);
		cy.get('[data-cy="mrr-form-expensesMonth"]').should('be.visible').type(20000);
		cy.get('[data-cy="mrr-form-surrenderTresholdTotal"]').should('be.visible').type(3);
		cy.get('[data-cy="mrr-form-submit"]').click();
		cy.wait(2000);
		cy.get('[data-cy="mrr-chart"]').should('be.visible').and((chart) => {
			expect(chart.height()).to.be.equal(500);
		});
		cy.get('[data-cy="mrr-chart"]').toMatchImageSnapshot();
	});
});
