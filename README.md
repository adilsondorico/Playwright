# Playwright
API Test - Playwright
Configuração do ambiente de testes

Criar uma pasta o disco local e instalar o Playwright na mesma;
Instalação do Playwright: https://playwright.dev/docs/intro#installing-playwright;
Utilizar a IDE (compatível) de sua preferência para escrever e executar os testes;
OBS: Nestes testes foi utilizado o VSCode;
Após escrever os testes, executar o comando "$ npm run tests:api" no terminal do vscode;

O relatório de execução dos testes, com os resultados obtidos e evidências estão nos diretórios:
\Playwright\playwright-report
\Playwright\test-results

 

Teste técnico QA - API
Você foi contratado como QA em uma equipe de desenvolvimento que está criando uma aplicação para amantes de cães. Sua tarefa é garantir a qualidade da integração com a Dog API https://dog.ceo/dog-api/documentation. A aplicação permitirá que os usuários visualizem imagens de diferentes raças de cães, bem como aprendam sobre as raças disponíveis.

DICAS ÚTEIS:

1. Reserve um tempo para fazer a automação, pois boas práticas serão consideradas. 

2. Procure disponibilizar as instruções necessárias para a configuração do projeto e execução dos testes. Um README.md bem descrito conta pontos extras.

3. Lembre-se de que seu código deverá ser executável na máquina do avaliador (Linux/Windows/MacOs). Uma execução via pipeline (Jenkins, GitHub Actions, GitLab CI/CD) pode ser útil neste caso.

4. Qualquer problema entre em contato com o recrutador. Nosso time estará à disposição para tirar dúvidas.

**Objetivo:**

Desenvolver um conjunto de testes automatizados para validar os endpoints da Dog API. Os testes devem garantir que a API esteja respondendo corretamente, que os dados retornados estejam no formato esperado e que a aplicação se comporte conforme o esperado em diferentes cenários.

**Requisitos:**

1. **Configuração do Ambiente:**
Utilize uma biblioteca de testes em uma linguagem de programação de sua escolha, preferencialmente Java.

2. **Endpoints a serem testados:**
- GET /breeds/list/all
- GET /breed/{breed}/images
- GET /breeds/image/random

3. **Relatório de Resultados:**
Após a execução dos testes, gere um relatório que contenha os resultados de cada teste, incluindo falhas e sucessos, com informações detalhadas sobre qualquer erro encontrad

4. **Documentação:**
Documente o processo de configuração do ambiente de teste, bem como as instruções para executar os testes.

**Entrega:**
Crie o repositório no GitHub (público) e nos envie o link.