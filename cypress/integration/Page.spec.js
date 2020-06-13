describe ('Test E2E', () => {
  it ('Acessando página Login e preencher dados para realizar o login.', () => {
    cy.visit ('http://localhost:3000/')
    cy.get('input[name="email"]').type('silvano@gmail.com')
    cy.get('input[name="senha"]').type('123456')
    cy.get('.btn').click()
  })

  it ('Página Lista de compras, interagir com menu.', () => {
    cy.get('.menuLateral li:last a').click()
  })

  it ('Cadastrar uma compra.', () => {
    cy.get('input[name="codigo"]').type('123456987415')
    cy.get('input[name="valor"]').type('10005')
    cy.get('input[type="date"]').type('2009-12-12')
    cy.get('input[type="radio"]:first').click()
    cy.get('.btn').click()
    cy.get('.container .message').its('length').should('eq', 1)
  })
  
})