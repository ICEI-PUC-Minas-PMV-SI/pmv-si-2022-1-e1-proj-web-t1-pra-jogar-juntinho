# Teste de Usabilidade
## Plano de Testes
### Cenário 01
Descrição: Pesquisar por um jogo a critério do usuário no site.

Critérios de Avaliação:
* Taxa de Sucesso – 
Conseguiu concluir: Sim / Não
* Taxa de Erro – 
Analisando o passo-a-passo, enumerar a quantidade de erros cometidos pelo usuário.

Fluxo: Clicar em filtro de Jogos > Inserir os parâmetros de pesquisa > clicar em buscar
* Satisfação Subjetiva: 
Nota de 1 a 5, sendo 5 como totalmente satisfeito e 1 como totalmente insatisfeito.

### Cenário 02
Descrição: Criar um usuário e fazer login.

Critérios de Avaliação:
* Taxa de Sucesso – 
Conseguiu concluir: Sim / Não
* Taxa de Erro – 
Analisando o passo-a-passo, enumerar a quantidade de erros cometidos pelo usuário.

Fluxo: Clicar em Login > Clicar em Cadastrar > Preencher as Informações de Nome/Nickname e senha > Clicar em Cadastrar.
* Satisfação Subjetiva: 
Nota de 1 a 5, sendo 5 como totalmente satisfeito e 1 como totalmente insatisfeito.

### Cenário 03
Descrição: Favoritar um jogo qualquer a critério do usuário e encontrá-lo em seu perfil.

Critérios de Avaliação:
* Taxa de Sucesso – 
Conseguiu concluir: Sim / Não
* Taxa de Erro – 
Analisando o passo-a-passo, enumerar a quantidade de erros cometidos pelo usuário.

Fluxo: Encontrar um jogo qualquer a critério do usuário > Clicar no coração de favoritar > Clicar no botão com o nome de perfil  
* Satisfação Subjetiva: 
Nota de 1 a 5, sendo 5 como totalmente satisfeito e 1 como totalmente insatisfeito.

## Dados Coletados

### Cenário 01 -
| Usuário |Taxa de Sucesso | Taxa de Erro | Satisfação Subjetiva |
|-----------|----------|----------|----------|
|01| 100% | 0 | 3 |
|02| 100% | 2 | 3 |
|03| 100% | 2 | 4 |
|04| 100% | 2 | 4 |
|05| 100% | 0 | 4 |

### Cenário 02 -
| Usuário |Taxa de Sucesso | Taxa de Erro | Satisfação Subjetiva |
|-----------|----------|----------|----------|
|01| 100% | 1 | 4 |
|02| 100% | 1 | 5 |
|03| 100% | 1 | 5 |
|04| 100% | 1 | 5 |
|05| 100% | 0 | 5 |

### Cenário 03 -
| Usuário |Taxa de Sucesso | Taxa de Erro | Satisfação Subjetiva |
|-----------|----------|----------|----------|
|01| 100% | 0 | 2 |
|02| 100% | 1 | 5 |
|03| 100% | 0 | 4 |
|04| 100% | 0 | 5 |
|05| 100% | 0 | 5 |

## Resultado dos Testes

| Critério | Cenário 01 | Cenário 02 | Cenário 03 | Mínimo / Máximo Aceitável |
|-----|-----|-----|-----|-----|
| Taxa de Sucesso | 100% | 100% | 100% | 90% / 100% |
| Taxa de Erro | 1,2 | 0,8 | 0,2 | 0 / 2 |
| Satisfação Subjetiva| 3,6 | 4,8 | 4,2 | 3 / 5 |


## Avaliação

Durante o teste de usabilidade surgiram sugestões dos usuários.

### Cenário 01 

A interface parece confusa para o usuário, o local e a maneira que o filtro de jogos é representado são confusos. 

As sugestões são: a inserção de uma barra de busca / o filtro de jogos ser exibido na página Home / acrescentar um icone de lupa ao botão de filtro / mudar o nome do botão de filtro de jogos para "Buscar Jogo", quando o site não retornar nenhum jogo por exemplo em busca por nome retornar ao usuário que não foi encontrado o jogo e outra sugestão data por usuários foi de poder tirar a seleção dos inputs de gênero e plataformas.

### Cenário 02 

O usuário encontra com certa demora o botão de cadastro, por terem que passar inicialmente pelo botão de login para só ai chegar ao cadastro em certo momento o usuário não considerou o botão de login como trajeto lógico para chegar ao cadastro. 

A sugestão de melhoria é: Alterar o nome o botão de login para "Login / Cadastro" ou então "Entrar".

### Cenário 03

Apresenta facilidades e dificuldades, o card do jogo é facil de achar mas a página do jogo só é exibida clicando em mais informações e não clicando no card, o perfil foi encontrado com facilidade. 

As sugestões são: Tornar o card do jogo um botão que leve à página do jogo, excluindo o botão de mais informações / Aumentar os icones do card pois estão muito pequenos, deixa para comentar anonimamente no detalhe do jogo, pois de acordo com um dos usuários o motivo de ter que criar um login para poder contribuir com o feedback sobre o jogo o faz desistir de comentar e colocar links para download do jogo na aba de "mais informações" do jogo. 

## Demandas encontradas após avaliação

### Cenário 01

* Criar um filtro de jogos idêntico ao da página de FIltro na página Home, quando o usuário clicar em "buscar" direcionar o usuário com os resultados para a página de filtro.

* Criar um aviso de Jogo não encontrado quando o filtro não retornar resultados.

### Cenário 02

* Alterar o nome do botão de Login/ Cadastro para "Entrar".

### Cenário 03

* Tornar o card de jogo um botão que leve à página do jogo, retirando o botão de mais informações.

* Aumentar o tamanho dos ícones que aparecem no card, incluindo o de favoritar.