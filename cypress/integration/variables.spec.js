describe("Variables, Closure and Aliease", () => {
 before(() => {
  localStorage.setItem('isAuthenticated', 'isAuthenticated')
  cy.visit('http://localhost:3000/tasks')
 })

 it.only('should add one task', () => {

  cy.get('ul>li').then(list => {
   cy.wrap(list.length).as('sizeList')
   const sizeList = list.length
   cy.get('.task-list--width-input').type('tarefa 2')
   cy.get('button').click()

   cy.get('ul>li').then(list => {
    expect(list.length).to.eq(sizeList + 1)
    cy.get('@sizeList').then(oldSizeList => {
     expect(list.length).to.eq(oldSizeList + 1)
    })
   })
  })
  
  

 
 })
})