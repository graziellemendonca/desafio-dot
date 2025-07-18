/// cypress/e2e/kabum.cy.js

describe('Kabum - Fluxo de Compra', () => {
  const searchTerm = 'notebook';
  const cepValido = '30120080';
  const cepInvalido = '00000000';
  const termoInvalido = 'xptoasdkjak';

  beforeEach(() => {
    cy.visit('www.kabum.com.br');
    cy.aceitarCookies();
  });

  it('Deve realizar busca por "notebook"', () => {
    cy.buscarProduto(searchTerm);
    cy.contains(searchTerm, { matchCase: false }).should('exist');
  });

  it('Deve selecionar o primeiro produto da lista', () => {
    cy.buscarProduto(searchTerm);
    cy.selecionarPrimeiroProduto();
    cy.get('#inputCalcularFrete').should('be.visible');
  });

  it('Deve validar o frete com um CEP válido', () => {
    cy.buscarProduto(searchTerm);
    cy.selecionarPrimeiroProduto();
    cy.digitarCep(cepValido);
    cy.contains('Verificar outro CEP', { timeout: 10000 }).should('be.visible');
  });

  it('Deve exibir mensagem para CEP inválido', () => {
    cy.buscarProduto(searchTerm);
    cy.selecionarPrimeiroProduto();
    cy.digitarCep(cepInvalido);
    cy.contains('CEP inválido').should('exist');
  });

  it('Deve exibir mensagem de nenhum resultado para busca inválida', () => {
    cy.buscarProduto(termoInvalido);
    cy.contains('Nenhum resultado encontrado').should('exist');
  });

  context('Carrinho e Garantia', () => {
    beforeEach(() => {
      cy.buscarProduto(searchTerm);
      cy.selecionarPrimeiroProduto();
      cy.adicionarAoCarrinho();
      cy.finalizarCompra();
    });

    it('Deve adicionar produto ao carrinho', () => {
      cy.contains('Produto adicionado no carrinho', { timeout: 10000 }).should('be.visible');
    });

    it('Deve adicionar garantia de 12 meses', () => {
      cy.adicionarGarantia(12);
    });

    it('Deve validar item e garantia no carrinho', () => {
      cy.adicionarGarantia(12);
      cy.get('div.bg-primary-500.p-16').scrollIntoView();
      cy.contains('Garantia Estendida Kabum').should('be.visible');
      cy.contains('12 Meses').should('be.visible');
    });
  });
});
