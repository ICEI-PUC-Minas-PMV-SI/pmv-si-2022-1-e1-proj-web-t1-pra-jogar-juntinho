# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Disponibilizar área com lista de jogos eletrônicos cooperativos em categorias |
|TF-002| Jogo | Exibir página com informações do jogo eletrônico cooperativo selecionado |
|TF-003| Filtro | Filtrar jogos eletrônicos cooperativos por categorias |
|TF-004| Home | Permitir que o usuário navegue pelas categorias de jogos |
|TF-005| Cadastro | Permitir cadastro de usuário |
|TF-006| Login | Permitir login do usuário |
|TF-007| Várias | Permitir o usuário a favoritar jogos |
|TF-008| Perfil | Exibir lista de jogos favoritado do usuário logado |
|TF-009| Jogo | Permitir usuário avaliar um jogo |
|TF-010| Jogo | Permitir usuário a postar comentários no jogo |
|TF-011| Jogo | Exibir comentários de outro usuário na página com informações do jogo selecionado |

# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|RTF-001| Home |  | NÃO |
|RTF-002| Home | | NÃO |
|RTF-003| Filtro-jogos | | NÃO |
|RTF-004| Home | | NÃO |
|RTF-005| Cadastro | | NÃO |
|RTF-006| Login | | NÃO |
|RTF-007| Várias | | NÃO |
|RTF-008| Perfil | | NÃO |
|RTF-009| Jogo | | NÃO |
|RTF-010| Jogo | | NÃO |
|RTF-011| Jogo | | NÃO |

## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 00 de Junho de 2022 às 00h00.

Foram reportados os seguintes bugs:

- (RTF-004) Ao clicar na opção "Ver mais" em um dos cards "Redes de Apoio" da homepage, o usuário é direcionado para a página de Redes de Apoio sem a apresentação das informações da instituição selecionada na index.

- (RTF-009) Ao fazer a seleção de uma cidade na página "Redes de Apoio", os dados da cidade selecionada anteriormente permanecem na tela, apenas acumulando as informações junto às da nova seleção.

Os bugs ainda não foram resolvidos até a escrita deste documento.

Novos testes serão realizados em breve após a correção dos problemas.

<hr>
 
<p align="left"><a href="./development.md">Programação de Funcionalidades</a>