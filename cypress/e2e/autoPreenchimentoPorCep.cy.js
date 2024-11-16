describe('Verifica o auto preenchimento dos campos após inserção de cep', () => {
    
    beforeEach(() => {
        cy.visit('https://www.bsntecnologia.com.br/TesteQA.html')
        cy.clearLocalStorage()
      });

    it.only('Validação de auto preenchimento dos campos endereço, cidade e estado após inserção de um cep válido', () => {
    
        cy.get('#cep').type('65074-560')
        cy.get('body').click()
        cy.wait(2000)
        cy.get('#endereco').invoke('val').should('not.be.empty');
        cy.get('#cidade').invoke('val').should('not.be.empty');
        cy.get('#estado').invoke('val').should('not.be.empty');
        
      });
    

});