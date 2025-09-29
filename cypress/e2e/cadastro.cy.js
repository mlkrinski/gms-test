/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
    
  }); 

  it('Deve fazer o cadastro de campos obrigatórios', () => {  
    var email = `marcelo${Date.now()}@test.com`  
    cy.preencherCadastro('Marcelo', 'Krinski', email, '5599663355', 'Teste@1245')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  it('Deve validar mensagem de erro com o campo nome inválido', () => {  
    cy.preencherCadastro('Marcelo20', 'Krinski', 'mk2@test.com', '5599663355', 'Teste@1245')
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos')
  });
})
