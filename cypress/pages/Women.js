class Women {
	get topsCheckBox() {
		return cy.get('#layered_category_4')
	}
	get dressesCheckBox() {
		return cy.get('#layered_category_8')
	}
	get sizeCheksBox() {
		return cy.get('#ul_layered_id_attribute_group_1 input')
	}

	//metody
	checTops() {
		this.topsCheckBox.check()
	}
	checkDresses() {
		this.dressesCheckBox.check()
	}
	checkSize() {
		this.sizeCheksBox.check()
	}
}

export default new Women()
