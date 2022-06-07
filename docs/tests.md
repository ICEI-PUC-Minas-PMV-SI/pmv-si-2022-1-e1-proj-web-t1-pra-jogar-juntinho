# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir a index, é esperado que sejam carregados os "cards" de Depoimento, Denúncia, Redes de Apoio e o carrossel de notícias, bem como a topbar e a footbar. |
|TF-001| Home | Ao abrir a index, é esperado que sejam carregados os "cards" de Depoimento, Denúncia, Redes de Apoio e o carrossel de notícias, bem como a topbar e a footbar. |

# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|RTF-001| Home | Todos os "cards" previstos foram carregados na index/homepage sem atrasos ou bugs. | NÃO |
|RTF-002| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |

## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 00 de Junho de 2022 às 00h00.

Foram reportados os seguintes bugs:

- (RTF-004) Ao clicar na opção "Ver mais" em um dos cards "Redes de Apoio" da homepage, o usuário é direcionado para a página de Redes de Apoio sem a apresentação das informações da instituição selecionada na index.

- (RTF-009) Ao fazer a seleção de uma cidade na página "Redes de Apoio", os dados da cidade selecionada anteriormente permanecem na tela, apenas acumulando as informações junto às da nova seleção.

Os bugs ainda não foram resolvidos até a escrita deste documento.

Novos testes serão realizados em breve após a correção dos problemas.

<hr>
 
<p align="left"><a href="./development.md">Programação de Funcionalidades</a>