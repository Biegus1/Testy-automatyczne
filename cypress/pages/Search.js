class Search {
	get searchBox() {
		return cy.get('#search_query_top')
	}

	//Metody
	typeSearchPrhase(searchValue) {
		this.searchBox.type(searchValue)
	}
    cleatSearch() {
        this.searchBox.clear()
    }

}

export default new Search()
