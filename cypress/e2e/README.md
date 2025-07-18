# Desafio Automação Robot Framework

## Pré-condições
- Instale o Python 3.13.0 em sua máquina.
- Instale o ChromeDriver e adicione ao PATH do sistema.
- Instale as dependências do projeto utilizando o arquivo `requirements.txt`:
  ```bash
  pip install -r requirements.txt
  ```

  ```bash
  pip install -r requirements.txt
  ```

## Estrutura do Projeto
- `tests/kabum.robot`: Teste automatizado para compra de notebook no Kabum
- `tests/amazon.robot`: Teste automatizado para compra de livro na Amazon
- `steps/KabumSteps.robot`: Keywords para o fluxo Kabum
- `steps/AmazonSteps.robot`: Keywords para o fluxo Amazon
- `requirements.txt`: Dependências do projeto
- `set-credentials.ps1`: Script para configurar variáveis de ambiente

## Como Executar
1. Execute todos os testes:
   ```bash
   robot tests/
   ```
2. Para executar apenas o cenário Kabum:
   ```bash
   robot tests/kabum.robot
   ```
3. Para executar apenas o cenário Amazon:
   ```bash
   robot tests/amazon.robot
   ```

## Documentação BDD
Os arquivos `.robot` estão documentados com comentários explicativos e seguem o fluxo dos desafios propostos.

## Relatórios
Após a execução, serão gerados os arquivos `report.html` e `log.html` com evidências analíticas dos testes.

## Observações
- É necessário ter o ChromeDriver instalado e disponível no PATH.
