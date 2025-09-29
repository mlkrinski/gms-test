/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadasro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type("Marcelo")
    cy.get('#signup-lastname').type("Krinski")
    cy.get('#signup-email').type("marcelo4@test.com")
    cy.get('#signup-phone').type("5599886633")
    cy.get('#signup-password').type("Test@1245")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})