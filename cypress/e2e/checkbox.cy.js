/// <reference types="cypress"/>

import Base from '../pages/Base'
import home from '../pages/home'
import Women from '../pages/Women'

describe('Test related to marking checkboxes', () => {
	it('Clicking on the tab Women', () => {
		Base.openHomePage()
		home.clikOnWomenTab()
		cy.url().should('include', 'id_category=3&controller=category') //sprawdza czy weśliśmy na wybraną stronę
	})
	it('Selecting a checkbox in the tab', () => {
		Women.checTops()
		Women.topsCheckBox.should('be.checked')
		Women.checkDresses()
		Women.checkSize()
	})
})
