import { baseUrl } from '../e2e';
import { DATA, WEBTABLES, LOCATORS} from './webtalesLocators';



class Table {

    visitWebtables() {
        cy.visit(baseUrl+'/webtables')
        return cy.get(LOCATORS.mainHeader).should('have.text', 'Web Tables')
    }

    saveRecordsInList(array) {
        
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


    fillFieldFirstname(firstname = DATA.firstName) {
        cy.get(LOCATORS.inputFirstName).clear()
        cy.get(LOCATORS.inputFirstName).type(firstname) 
    }

    fillFieldLastname(lastname = DATA.lastName) {
        cy.get(LOCATORS.inputLastName).clear()
        cy.get(LOCATORS.inputLastName).type(lastname)  
    }

    fillFieldEmail(email = DATA.userEmail) {
        cy.get(LOCATORS.inputUserEmail).clear()
        cy.get(LOCATORS.inputUserEmail).type(email)  
    }

    fillFieldAge(age = DATA.dataAge) {
        cy.get(LOCATORS.inputAge).clear()
        cy.get(LOCATORS.inputAge).type(age)   
    }

    fillFieldSalary(salary = DATA.dataSalary) {
        cy.get(LOCATORS.inputSalary).clear()
        cy.get(LOCATORS.inputSalary).type(salary)   
    }

    fillFieldDepartment(department = DATA.dataDepartment) {
        cy.get(LOCATORS.inputDepartment).clear()
        cy.get(LOCATORS.inputDepartment).type(department)   
    }


    fillForm(firstname, lastname, email, age, salary, department) {
        var wt = new Table()
        wt.fillFieldFirstname(firstname)
        wt.fillFieldLastname(lastname)
        wt.fillFieldEmail(email)
        wt.fillFieldAge(age)
        wt.fillFieldSalary(salary)
        wt.fillFieldDepartment(department) 
    }


    getCellWithText(num=1) {

        return cy.get(LOCATORS.tabRows_2 +':nth-child('+num+')').find(LOCATORS.cellTab)
        .not(LOCATORS.lastCell)    
    }


    makeDoubleRecNum(num) {
        var wt = new Table()
        var loc = LOCATORS.formGroup
        wt.getCellWithText()
            .each(($span, i) => {
            wt.fillField(loc[i], $span.text())
        })  
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