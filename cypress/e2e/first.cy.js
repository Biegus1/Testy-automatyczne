/// <reference types="cypress"/>

describe('My first automated test', () => {
	it('Opening the page google.com', () => {
		cy.visit('https://google.com')
	})
})
