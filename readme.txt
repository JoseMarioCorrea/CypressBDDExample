Instalação 

- Instalar o NodeJs
https://nodejs.org/en//

- Instalar o Cypress com Cucumber (Cypress é o framework de auxilio na criação dos scripts de testes / Cucumber é o framework para escritas em BDD)
npm install --save-dev cypress cypress-cucumber-preprocessor

- Após a instalação é necessário executar o Cypress 
npx cypress open

- Configurar o Cucumber no Cypress:

--Adicione ao arquivo cypress/plugins/index.js o seguinte script:

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

- Configurar o package.json
{
  "devDependencies": {
    "cypress": "^9.2.1",
    "cypress-cucumber-preprocessor": "^4.3.1"
  },

  "scripts": {
      "test:chrome": "cypress run --browser chrome --no-exit"
  },
  
  "cypress-cucumber-preprocessor": {
      "step_definitions": "cypress/support/steps"
  }
}

- Configurar Cypress.json

{
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 10000,
}