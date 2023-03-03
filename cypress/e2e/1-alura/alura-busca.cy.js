describe('alura busca cursos',() => {

  beforeEach(()=>{
      cy.visit('https://www.alura.com.br');
  })

  it.skip('buscar curso de java',() => {
    cy.get('#header-barraBusca-form-campoBusca').type('java');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get("//h4[text()='Formação Java e Orientação a Objetos']")
       .should('contain', 'Formação Java e Orientação a Objetos');
  })
})