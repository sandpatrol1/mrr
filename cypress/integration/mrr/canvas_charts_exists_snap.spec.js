describe('MRR app', () => {
	it('should see a canvas', () => {
		cy.visit('/');
		cy.get('canvas');
	});
});
