import { DATA} from '../../support/Page/webtalesLocators';
import { WEBTABLES} from '../../support/Page/webtalesLocators';
import Table from '../../support/Page/table'


describe('Webtable tests', () => {
  const wt = new Table
  var Records = []

  beforeEach(() => {
    wt.visitWebtables()             // Переходим на страницу /webtables
    wt.saveRecordsInList(Records)  // сохраняем в словарь каждую запись
    })


    //При переходе на страницу открывается таблица с тремя строками записей 
    //и столбцами First Name, Last Name, Age, Email, Salary, Department, Action
    it('1. При переходе на страницу открывается таблица с тремя строками записей и столбцами ...', () => {
      
      wt.webtableIsOpen()  //открывается таблица
      wt.getAllRecords().should('have.length', 3) // с тремя строками записей 
      wt.tabHaveColumnsWithName(WEBTABLES.arrayColumnNames)  //и столбцами First Name, Last Name, Age, Email, Salary, Department, Action
    })
  
    

        // В этом тесте важен порядок наименований строк? А строка Actions точно должна быть?
    it('2. При нажатии на кнопку Add - откроется форма создания записи, строки формы соответствуют столбцам таблицы', () => {

      wt.clickButtonAdd() //При нажатии на кнопку Add
      wt.webtableIsOpen() // откроется форма создания записи
      wt.tabRowNamesEqColumns(WEBTABLES.rowNames) // назвагие строк соответствует столбцам таблицы
    })

    
    it('3. При незаполненных полях и нажатии на Submit форма остается открытой, запись не создается', () => {

      wt.clickButtonAdd()  //При нажатии на кнопку Add
      wt.getModalWindow().should('be.exist') // откроется форма создания записи
      
      wt.checkFormIsEmpty() // проверяем, что форма пустая

      wt.clickButtonSubmit()  //При нажатии на кнопку Submit
      wt.getModalWindow().should('be.exist') // форма остается открытой

        // Новая запись не должна появиться, проверяем осталось ли количество записей прежним
      wt.webtableIsOpen() // таблица открыта
      wt.getAllRecords().should('have.length', 3) // число записей не изменилось
    })
    

    it('4. При заполненных полях форма закрывается, появляется запись в таблице', () => {

        wt.clickButtonAdd()  //При нажатии на кнопку Add
        wt.getModalWindow().should('be.exist') // откроется форма создания записи
        
        wt.fillForm()  // Заполняем форму
        
        wt.clickButtonSubmit()  //При нажатии на кнопку Submit
        wt.getModalWindow().should('be.not.exist') // форма закрывается

        wt.webtableIsOpen() //таблица открыта

        wt.getAllRecords().should('have.length', 4) // Количество записей в таблице увеличилось на одну
        wt.lastRecordEqData(DATA) // Новая запись в таблице соответcвует добавленной на предыдущем шаге

    })



  it('5. При удалении созданной записи - она и только она пропадает из таблицы', () => {

    wt.webtableIsOpen() //таблица открыта

    wt.deleteRecordNum(1) // Удаляем первую запись
    
    // Проверяем, что удаляемая запись исчезла из таблицы, а остальные остались
    wt.getAllRecords()
      .should('contain', Records[1])
      .and('contain', Records[2])
      .and('not.contain', Records[0])
  })


  it('6. При поиске по имени Cierra остается только одна строчка с данными по Cierra', () => {

    wt.webtableIsOpen()  //открывается таблица//

    wt.searchValue("Cierra") // В окно поиска вводим значение "Cierra"

    // Проверяем, что в выдаче результатов только одна запись, удолетворяющая условию поиска
    wt.getAllRecords()
      .should('have.length', 1)
      .should('contain', 'Cierra')
  })

  
})