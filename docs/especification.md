# Especificações do Projeto
## Personas

1º Persona

Otávio Alexander tem 24 anos, é advogado recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de cursos online, pois é extremamente habituado ao meio digital, é solteiro e seu principal lazer é jogar jogos eletrônicos com seus amigos. Otávio tem pouco tempo para jogar e está buscando sempre os melhores jogos para jogar juntinho com seus amigos.

2º Persona
Pedro é estudante de publicidade e propaganda, tem 21 anos de idade e faz estágio em uma agência. Solteiro e gosta de acompanhar as novidades do universo dos jogos, além de ser um jogador frequente. Um dos seus hobbies principais é jogar online com seus amigos após o trabalho, porém, os horários de todos começaram a ser diferentes, e por isso Pedro procura novos jogos cooperativos para conhecer outras pessoas. 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Um jogador pouco frequente   | que o site me deixe favoritar os jogos                                | eu encontrá-los rapidamente outro dia        |
|Um jogador frequente         | de jogos online em larga escala                                       | fazer novas amizades e me divertir           |
|Um jogador pouco frequente   | filtrar a data dos jogos                                              | ver quais se são da minha época              |
|Um jogador pouco frequente   | de jogos de facil acesso e simples                                    | eu passar o tempo com meus netinhos          |
|Um jogador inexperiente          | poder ver criticas de jogadores, algum vídeo de demonstração do jogo e maneiras de colocar os jogos como favoritos                                                             | conseguir escolher melhor minhas primeiras experiências nos jogos                                          |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|  ID  | Descrição do Requisito | Prioridade |
|------|------------------------|------------|
|RF-001| Disponibilizar área com lista de jogos eletrônicos cooperativos em categorias              | ALTA       | 
|RF-002| Implementar a possibilidade de favoritar um jogo                               | ALTA       |
|RF-003| Disponibilizar página com informações do jogo eletrônico cooperativo selecionado           | ALTA       |
|RF-004| Ter uma funcionalidade que permita filtrar jogos eletrônicos cooperativos por tipos(Categorias) | ALTA       |
|RF-005| Disponibilizar página de login                                                             | MÉDIA      |
|RF-006| Disponibilizar funcionalidade que permita usuário inserir dados de cadastro                | MÉDIA      |
|RF-007| Disponibilizar área com classificação do jogo                                              | MÉDIA      |
|RF-008| Colocar no site a opção de dar nota, ou estrelas ao jogo, uma espécie de voto                               | BAIXA      |
|RF-009| Disponibilizar área com comentários do jogo, para críticas                                                | MÉDIA     |
|RF-010| Disponibilizar funcionalidade que permite favoritar jogos                                  | BAIXA      |
|RF-011| Ter um vídeo de apresentação do jogo, mostrando um pouco da mecânica e sinopse | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet | ALTA  | 
|RNF-002| Verificar se não há bots adulterando as classificações                                        | ALTA  | 
|RNF-003| O sistema deve atender os protocolos de segurança https                                       | ALTA  | 
|RNF-004| Verificar se as solicitações estão sendo atendidas corretamente                               | ALTA  | 
|RNF-005| Disponibilidade de adaptação da interface pró acessibilidade                                  | ALTA  | 
|RNF-006| Verificar se o sistema está claro e fácil de se utilizar                                      | MÉDIA | 
|RNF-007| Deve processar requisições de usuário em até 3s                                               | BAIXA | 
|RNF-008| Ter um design bonito, limpo e que deixe as funcionalidades mais intuitivas | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A abrangência do projeto limita-se aos jogadores de jogos eletrônicos cooperativos e aspirantes                |
|02| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 08/07/2022 |
|03| FrontEnd desenvolvido em HTML, CSS e JavaScript                                                    |
|04| A página deverá ter disponibilidade em 90% do tempo                                                |