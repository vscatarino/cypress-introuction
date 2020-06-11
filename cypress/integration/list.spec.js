describe.only('List test', () => {
 before(() => {
  localStorage.setItem('isAuthenticated', 'isAuthenticated')
  cy.visit('http://localhost:3000/tasks')
 })

 it('retry-ability I', () => {
  //rodar comando inteiro
  //procurar por um elemento que não exista
  //tentar clicar num botão desabilitado
  cy.get('input[name=data_input]').type('tarefa 1').then(() => {
   cy.get('button').click().then(() => {
    cy.get('.task-list--flex-start').should('have.text', 'tarefa 1')
   })
  })
 })

 it('retry-ability II: Assertos internos ', () => {
  cy.contains('Add')
 })

 it('retry-ability III: Apenas o último comando é repetido', () => {
  //escrever da forma correta
  cy.get('.task-list--flex-start').find('ul>.cypress-li')

  cy.get('input[name=data_input]').type('tarefa 2').then(() => {
   cy.get('button').click()
  })

 })

})