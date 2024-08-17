/// <reference types="cypress"/>

import Base from '../pages/Base'
import Search from '../pages/Search'
import { searchPhrase, notFundProduct } from '../fixtures/searchData.json'
import ResultPage from '../pages/ResultPage'

describe('Entering text into the search engine', () => {
	it('Entering text', () => {
		Base.openHomePage()
		Search.typeSearchPrhase(searchPhrase)
		Search.searchBox.should('have.value', searchPhrase)
		cy.wait(3000)
		Search.cleatSearch()
		cy.wait(3000)
		Search.typeSearchPrhase(`${searchPhrase} '{enter}'`)
		ResultPage.searchAlert.should('be.visible').and('include.text', notFundProduct)
		Search.searchBox.should('have.class', 'search_query')
		Search.searchBox.should('have.css', 'margin-right', '1px')
	})
})
