/// <reference types="cypress"/>

describe('Test related to marking select', () => {
	it('Clicking on the tab Women', () => {
		cy.visit('/')
		cy.get('a[title="Women"]').click()
		cy.url().should('include', 'id_category=3&controller=category')
	})
	it('Selecting the In stock filter', () => {
		cy.get('#selectProductSort').select('In stock')
		cy.get('#selectProductSort').should('have.value', 'quantity:desc')
	})
	it('Selecting the Product Name: A to Z filter', () => {
		cy.get('#selectProductSort').select('name:asc')
		cy.get('#selectProductSort').should('have.value', 'name:asc')
	})
})
