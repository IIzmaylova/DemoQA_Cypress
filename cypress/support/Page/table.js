import { baseUrl } from '../e2e';
import { LOCATORS } from './webtalesLocators';
import { DATA} from './webtalesLocators';



class Table {

    visitWebtables() {
        cy.visit(baseUrl+'/webtables')
        return cy.get(LOCATORS.mainHeader).should('have.text', 'Web Tables')
    }

    saveRecordsInList(array) {
        // var Records = []
        cy.get(LOCATORS.tabBody).find(LOCATORS.tabRows)
        .each(($span, i) => {
        array[i] = ($span.text())   // сохраняем в словарь каждую запись
        })
        return array
    }

    webtableIsOpen() {
        return cy.get(LOCATORS.webTable).should('be.exist')
    }


    getAllRecords() {
        return cy.get(LOCATORS.tabBody).find(LOCATORS.tabRows).not(LOCATORS.emptyRow)
    }

    clickButtonAdd() {
        return cy.get(LOCATORS.buttonAdd).click()
    }

    tabRowNamesEqColumns(array) {
        return cy.get(LOCATORS.nameRow)
        .each(($span, i) => {
            expect($span.text()).to.equal(array[i])
        })
    }

    tabHaveColumnsWithName(array) {
        return cy.get(LOCATORS.columnNames)
        .each(($span, i) => {
          expect($span.text()).to.equal(array[i])
      })
    }

    getModalWindow() {
        return cy.get(LOCATORS.modalWindow)
    }

    fieldIsEmpty(nameField) {
        return cy.get(nameField).should('have.text', '')
    }

    clickButtonSubmit() {
        return cy.get(LOCATORS.buttonSubmit).click()
    }

    submitButton() {
        return cy.get('#submit')
    }

    fillField(locator, text) {
        return cy.get(locator).type(text)
    }


    fillFieldFirstname() {
        cy.get(LOCATORS.inputFirstName).clear()
        cy.get(LOCATORS.inputFirstName).type(DATA.firstName) 
    }

    fillFieldLastname() {
        cy.get(LOCATORS.inputLastName).clear()
        cy.get(LOCATORS.inputLastName).type(DATA.lastName)  
    }

    fillFieldEmail() {
        cy.get(LOCATORS.inputUserEmail).clear()
        cy.get(LOCATORS.inputUserEmail).type(DATA.userEmail)  
    }

    fillFieldAge() {
        cy.get(LOCATORS.inputAge).clear()
        cy.get(LOCATORS.inputAge).type(DATA.dataAge)   
    }

    fillFieldSalary() {
        cy.get(LOCATORS.inputSalary).clear()
        cy.get(LOCATORS.inputSalary).type(DATA.dataSalary)   
    }

    fillFieldDepartment() {
        cy.get(LOCATORS.inputDepartment).clear()
        cy.get(LOCATORS.inputDepartment).type(DATA.dataDepartment)   
    }


    fillForm() {
        var wt = new Table()
        wt.fillFieldFirstname()
        wt.fillFieldLastname()
        wt.fillFieldEmail()
        wt.fillFieldAge()
        wt.fillFieldSalary()
        wt.fillFieldDepartment() 
    }


    checkFormIsEmpty() {
        var wt = new Table()
        wt.fieldIsEmpty(LOCATORS.inputFirstName) // Поля пустые
        wt.fieldIsEmpty(LOCATORS.inputLastName) // Поля пустые
        wt.fieldIsEmpty(LOCATORS.inputUserEmail) // Поля пустые
        wt.fieldIsEmpty(LOCATORS.inputAge) // Поля пустые
        wt.fieldIsEmpty(LOCATORS.inputSalary) // Поля пустые
        wt.fieldIsEmpty(LOCATORS.inputDepartment) // Поля пустые
    }

    deleteRecordNum(num) {
        return cy.get(LOCATORS.btnDeleteRecords[num]).click()
    }

    lastRecordEqData(DATA) {
        return cy.get(LOCATORS.tabRows).not(LOCATORS.emptyRow).last()
        .should('contain', DATA.firstName)
        .and('contain', DATA.lastName)
        .and('contain', DATA.userEmail)
        .and('contain', DATA.dataAge)
        .and('contain', DATA.dataSalary)
        .and('contain', DATA.dataDepartment)
    }

    searchValue(value) {
        cy.get(LOCATORS.searchBox).clear()
        cy.get(LOCATORS.searchBox).type(value)
        cy.get(LOCATORS.btnSearch).click() 
    }
}

export default Table