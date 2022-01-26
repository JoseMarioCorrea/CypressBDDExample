/* global Given, Then, When */

import GvdasaPage from '../pageobjects/GvdasaPage.js'
const gvdasaPage = new GvdasaPage

Given("acesso ao site Gvdasa", () => {
    gvdasaPage.acessarSite();
})

When("acesso a pagina de Fale Com um Consultor", () => {
    gvdasaPage.clicarFaleConsultor();
})

Then("devo visualizar a página e o Formulário", () => {
    gvdasaPage.visualizarPaginaFormulário();
})