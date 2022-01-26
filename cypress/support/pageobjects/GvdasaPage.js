import GvdasaElements from '../elements/GvdasaElements'
const gvdasaElements = new GvdasaElements
const url = Cypress.config("baseUrl")

class GvadaPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
        cy.get(gvdasaElements.AceitarTodos()).click()
    }

    // Clica em falar com consultor
    clicarFaleConsultor() {
        cy.get(gvdasaElements.LinkConsultor()).click()
    }
  
    // Verifica a tela e preenche o formulário
    visualizarPaginaFormulário() {
        //verifica se existe a palavra contato na tela
        cy.get(gvdasaElements.contato()).should('contain', 'Contato')
        //verifica se existe a palavra onde estamos
        cy.get(gvdasaElements.ondeEstamos()).should('contain', 'Onde estamos')

        //inicia o preenchimento do formulário
        cy.get(gvdasaElements.nome()).type('Nome Teste')
        cy.get(gvdasaElements.email()).type('teste@teste.com.br')
        cy.get(gvdasaElements.telefone()).type('41999999999')
        cy.get(gvdasaElements.cidade()).type('cidade do teste')
    }
}

export default GvadaPage;