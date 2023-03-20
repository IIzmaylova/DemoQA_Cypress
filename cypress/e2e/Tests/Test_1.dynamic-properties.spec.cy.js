import  DynProperties  from '../../support/Page/dynamic-properties';


describe('/dynamic-properties', () => {
  var dp = new DynProperties()

  beforeEach(() => {
    cy.clock()  // Включаем секундомер
    dp.visitDynProperties() //Переходим на страницу /dynamic-properties
  })


  it('1. При входе на страницу кнопка Will enable 5 seconds не активна', () => {
    
    dp.getBtnEnableAfter().should('be.disabled')  // Проверяем, что при загрузке страницы кнопка неактивна
  })

  
  it('2. По прошествии 5ти секунд на экране появляется кнопка Visible After 5 Seconds', () => {

    dp.getBtnVisibleAfter().should('be.not.exist') // Проверяем, что при загрузке страницы кнопка не видна
    cy.tick(5000)                                  // Ждем 5 секунд
    dp.getBtnVisibleAfter().should('be.exist')    //Проверяем, что спустя 5 секунд кнопка видна

  })

    
  it('3. По прошествии 5ти секунд кнопка Will enable 5 seconds становится активна', () => {
    dp.getBtnEnableAfter().should('be.disabled') // Проверяем, что при загрузке страницы кнопка неактивна
    cy.tick(4000)
    dp.getBtnEnableAfter().should('be.disabled') // Через 4 сек кнопка неактивна
    cy.tick(1000)
    dp.getBtnEnableAfter().should('be.not.disabled') // После 5 секунд кнопка станоится активной
  })



  context('4. При перезагрузке страницы поведение кейсов 1 и 2 не изменяется', () => {
    beforeEach(() => {
      cy.clock()    // Включаем секундомер
      cy.reload()   // Обновление страницы
    })

    it('1. По прошествии 5ти секунд на экране появляется кнопка Visible After 5 Seconds', () => {
      dp.getBtnVisibleAfter().should('be.not.exist') // Проверяем, что при загрузке страницы кнопка не видна
      cy.tick(5000)                                  // Ждем 5 секунд
      dp.getBtnVisibleAfter().should('be.exist')    //Проверяем, что спустя 5 секунд кнопка видна
    })


    it('2. По прошествии 5ти секунд кнопка Will enable 5 seconds становится активна', () => {
      dp.getBtnEnableAfter().should('be.disabled') // Проверяем, что при загрузке страницы кнопка неактивна
      cy.tick(4000)
      dp.getBtnEnableAfter().should('be.disabled') // Через 4 сек кнопка неактивна
      cy.tick(1000)
      dp.getBtnEnableAfter().should('be.not.disabled') // После 5 секунд кнопка станоится активной
    })

  }) 
  
})
