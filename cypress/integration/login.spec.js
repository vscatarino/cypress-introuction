describe('Teste Login', () => {
 beforeEach(() => {
  cy.visit('http://localhost:3000')
 })

 it('should be a successfully login', () => {
  cy.get('input[name=email]').type('vcatarino15@gmail.com')
  cy.get('input[name=password]').type('cypress')
  cy.contains('Entrar').click()
   .then(() => {
   cy.url().should('include', '/tasks')
  })
 })

 it('should be fail', () => {
  cy.get('input[name=email]').type('vcatarino15@gmail.com')
  cy.get('input[name=password]').type('sserpyc')
  cy.contains('Entrar').click().then(() => {
   cy.get('.login--error-text').should('have.text', 'Seu email ou senha está incorreto.')
   cy.url().should('not.include', '/tasks')
  })
 })
})