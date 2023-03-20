import  Checkbox from '../../support/Page/checkbox';

describe('Checkbox', () => {

  var cb = new Checkbox()

    beforeEach(() => {
      cb.visitCheckbox()  // Переходим на страницу /checkbox
    })

    it('1. Последовательно перейти к директории WorkSpace', () => {
   
      cb.openDirectory('Home')      // Переход в директорию Home
      cb.openDirectory('Documents') // Переход в директорию Documents
      cb.openDirectory('WorkSpace') // Переход в директорию WorkSpace

 
      //Проверяем, что директория включает подпапки
      cb.getNameUnderfolders('WorkSpace')
        .should('contain', 'React')
        .and('contain', 'Angular')
        .and('contain', 'Veu')

    })
  

    it('2. При отметке чек-бокса React  появляется запись “You have selected :react”', () => {

      cb.openDirectory('Home')      // Переход в директорию Home
      cb.openDirectory('Documents') // Переход в директорию Documents
      cb.openDirectory('WorkSpace') // Переход в директорию WorkSpace

      // Проверка доступности подпапок текущей директории
      cb.getNameUnderfolders('WorkSpace')
        .should('contain', 'React')
        .and('contain', 'Angular')
        .and('contain', 'Veu')

      cb.checkDirectory('React')   // Отмечаем директорию React
      cy.contains('You have selected :react').should('be.exist') // Проверяем наличие записи

    })
  })