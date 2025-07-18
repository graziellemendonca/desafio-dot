# Desafio Automação Cypress

## Pré-condições
- Instale o Node.js (recomendado versão LTS).
- Instale as dependências do projeto:
  ```bash
  npm install
  ```

## Estrutura do Projeto
- `cypress/e2e/kabum.spec.js`: Teste automatizado para compra de notebook no Kabum (Cypress)
- `cypress/support/commands.js`: Comandos customizados Cypress

## Como Executar
1. Execute o Cypress:
   ```bash
   npx cypress open
   ```
   Ou para rodar em modo headless:
   ```bash
   npx cypress run
   ```
2. Os testes Cypress estão em `cypress/e2e/kabum.spec.js`.

## Documentação Cypress
Os testes Cypress utilizam comandos customizados para melhor organização e manutenção.

## Relatórios
Os relatórios podem ser visualizados diretamente na interface do Cypress ou exportados usando plugins.

## Observações
- Para Cypress, basta o Node.js e o navegador Chrome instalado.
