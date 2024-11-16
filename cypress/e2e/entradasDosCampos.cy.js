describe('Validação de entradas dos campos em Cadastro de pessoas BSN', () => {

  beforeEach(() => {
    cy.visit('https://www.bsntecnologia.com.br/TesteQA.html')
    cy.clearLocalStorage()
  });
  
  it('Validação de mensagem de erro ao tentar enviar formulário com o campo nome vazio', () => {
    
        cy.get('#sobrenome').type('sebastiana')
        cy.get('#cpf').type('173.897.507-07')
        cy.get('#cep').type('65074-560')
        cy.get('#numero').type('11')
        cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
        cy.get('#celular').type('(98) 98561-0660')
        cy.get('.btn').click()
        cy.get('#nome-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo sobrenome vazio', () => {
    
        cy.get('#nome').type('sandra')
        cy.get('#cpf').type('173.897.507-07')
        cy.get('#cep').type('65074-560')
        cy.get('#numero').type('11')
        cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
        cy.get('#celular').type('(98) 98561-0660')
        cy.get('.btn').click()
        cy.get('#sobrenome-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo cpf vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cep').type('65074-560')
    cy.get('#numero').type('11')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#cpf-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo cep vazio', () => {
      
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#endereco').type('Rua Setenta e Dois')
    cy.get('#numero').type('11')
    cy.get('#cidade').type('São Luís')
    cy.get('#estado').type('MA')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#cep-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo endereço vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#endereco').click().wait(2000).clear()
    cy.get('#numero').type('11')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#endereco-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo número vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#numero-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo cidade vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#cidade').click().wait(2000).clear()
    cy.get('#numero').type('11')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#cidade-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo estado vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#estado').click().wait(2000).clear()
    cy.get('#numero').type('11')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#estado-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo email vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#numero').type('11')
    cy.get('#celular').type('(98) 98561-0660')
    cy.get('.btn').click()
    cy.get('#email-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar enviar formulário com o campo celular vazio', () => {
    
    cy.get('#nome').type('sandra')
    cy.get('#sobrenome').type('sebastiana')
    cy.get('#cpf').type('173.897.507-07')
    cy.get('#cep').type('65074-560')
    cy.get('#numero').type('11')
    cy.get('#email').type('sandra_sebastiana_cardoso@uel.br')
    cy.get('.btn').click()
    cy.get('#celular-error').should('be.visible')

  });

  it('Validação de mensagem de erro ao tentar inserir um formato inválido de email', () => {
    
    cy.get('#email').type('sandra_sebastiana_cardosouel.br')
    cy.get('body').click()
    cy.contains('Please enter a valid email address.')

  });

  it('Validação de mensagem de erro ao tentar inserir um formato inválido de cep', () => {
    
    cy.get('#cep').type('65074')
    cy.get('body').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Formato de CEP inválido.');
    });

  });

  it('Validação de mensagem de erro ao tentar inserir um cep que não existe', () => {
    
    cy.get('#cep').type('12345-678')
    cy.get('body').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('CEP não encontrado.');
    });

  });

  
})