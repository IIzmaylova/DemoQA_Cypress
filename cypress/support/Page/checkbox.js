import { baseUrl } from '../e2e';
import { LOCATORS } from './checkboxLocators';


class Checkbox {

    visitCheckbox() {
        cy.visit(baseUrl+'/checkbox')
        cy.get(LOCATORS.mainHeader).should('have.text', 'Check Box')
    }

    openDirectory(directory) {
        cy.contains(directory).parent().find(LOCATORS.btnToggle).click()
    }

    getNameUnderfolders(directory) {
        return cy.contains(directory).parentsUntil('.rct-node-parent').next().get('.rct-title')
    }

    checkDirectory(directory) {
        cy.contains(directory).parent().find(LOCATORS.checkBox).click() 
    }
    
}

export default Checkbox