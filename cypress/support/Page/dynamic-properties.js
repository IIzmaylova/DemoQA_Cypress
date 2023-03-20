import { baseUrl } from '../e2e';
import { LOCATORS } from './dynamic-propertiesLocators';



class DynProperties {

    visitDynProperties() {
        cy.visit(baseUrl+'/dynamic-properties')
        return cy.get(LOCATORS.mainHeader).should('have.text', 'Dynamic Properties')
    }

    getBtnEnableAfter() {
        return cy.get(LOCATORS.btnEnableAfter)
    }
    
    getBtnVisibleAfter() {
            return cy.get(LOCATORS.btnvisibleAfter)
    }
    
    }
    
export default DynProperties