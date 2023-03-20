**Автотесты на Cypress для сайта https://demoqa.com**
1) https://demoqa.com/dynamic-properties
- При входе на страницу кнопка Will enable 5 seconds не активна
- По прошествии 5ти секунд на экране появляется кнопка Visible After 5 Seconds
- По прошествии 5ти секунд кнопка Will enable 5 seconds становится активна
- При перезагрузке страницы поведение кейсов 1 и 2 не изменяется

2) https://demoqa.com/webtables
- При переходе на страницу открывается таблица с тремя строками записей и столбцами First Name, Last Name, Age, Email, Salary, Department, Action
- При нажатии на кнопку Add - откроется форма создания записи, строки формы соответствуют столбцам таблицы
- При незаполненных полях и нажатии на Submit форма остается открытой, запись не создается
- При заполненных полях форма закрывается, появляется запись в таблице
- При удалении созданной записи - она и только она пропадает из таблицы
- При поиске по имени Cierra остается только одна строчка с данными по Cierra

3) https://demoqa.com/checkbox
- Последовательно перейти к директории WorkSpace
- При отметке чек-бокса React  появляется запись “You have selected :react”




