/// <reference types="cypress"/>

describe('Clicking on an element on the page', () => {
	it('clicking on the tab Contact us', () => {
		cy.visit('/')
		cy.get('a[title="Contact us"]').click()
	})
})
