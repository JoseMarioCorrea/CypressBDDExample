Feature: BDD_Exemplo

    Scenario: Acessar o Site da Gvdasa e validar as funcionalidades de Fale Com um Consultor
        Given acesso ao site Gvdasa
        When acesso a pagina de Fale Com um Consultor
        Then devo visualizar a página e o Formulário