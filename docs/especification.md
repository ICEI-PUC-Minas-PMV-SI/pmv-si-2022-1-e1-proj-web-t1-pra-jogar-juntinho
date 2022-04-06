# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1º Persona

Otávio Alexander tem 24 anos, é advogado recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de cursos online, pois é extremamente habituado ao meio digital, é solteiro e seu principal lazer é jogar jogos eletrônicos com seus amigos. Otávio tem pouco tempo para jogar e está buscando sempre os melhores jogos para jogar juntinho com seus amigos.

2º Persona
Pedro é estudante de publicidade e propaganda, tem 21 anos de idade e faz estágio em uma agência. Solteiro e gosta de acompanhar as novidades do universo dos jogos, além de ser um player assíduo. Um dos seus hobbies principais é jogar online com seus amigos após o trabalho, porém, os horários de todos começaram a ser diferentes, e por isso Pedro procura novos jogos cooperativos para conhecer outras pessoas. 

3º Persona
Jorge tem 25 anos e trabalha atualmente como vendedor em uma loja de shopping, devido a carga horária extensa de seu trabalho, teve que deixar de lado por mais de um ano, seu principal hobbie, que era jogar vídeo game. Casado e com pouco tempo disponível para acompanhar as novidades e os jogos mais populares, ele pretende voltar a jogar com mais frequência e a procurar games que possa também jogar com sua família.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Otávio | Que o site me disponibilize as informações necessárias para escolher bons jogos           | que eu me divirta com meus amigos               |
|Pedro        | Que o site me dê boas escolhas de jogos online, e não sejam demorados                 | fazer novos amizades e me divertir |
|Jorge|Que o site tenha opções de jogos em família, principalmente jogos com multiplayer da minha época|Me divertir com a família e levar ao meu filho jogos de minha época, mesmo sem ter jogado|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|  ID  | Descrição do Requisito | Prioridade |
|------|------------------------|------------|
|RF-001| Disponibilizar área com lista de jogos eletrônicos cooperativos em categorias              | ALTA       | 
|RF-002| Disponibilizar funcionalidade que permita selecionar um jogo                               | ALTA       |
|RF-003| Disponibilizar página com informações do jogo eletrônico cooperativo selecionado           | ALTA       |
|RF-004| Disponibilizar funcionalidade que permita filtrar jogos eletrônicos cooperativos por tipos | ALTA       |
|RF-005| Disponibilizar área com acesso ao cadastro de usuário                                      | MÉDIA      |
|RF-006| Disponibilizar página de login                                                             | MÉDIA      |
|RF-007| Disponibilizar funcionalidade que permita usuário inserir dados de cadastro                | MÉDIA      |
|RF-008| Disponibilizar área com classificação do jogo                                              | MÉDIA      |
|RF-009|Disponibilizar funcionalidade que permite classificar o jogo                                | MÉDIA      |
|RF-010| Disponibilizar área com comentários do jogo                                                | BAIXA      |
|RF-011| Disponibilizar funcionalidade que permite comentar sobre o jogo                            | BAIXA      |
|RF-012| Disponibilizar página com lista de jogos favoritados                                       | BAIXA      |
|RF-013| Disponibilizar funcionalidade que permite favoritar jogos                                  | BAIXA      |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet | ALTA | 
|RNF-002| Verificar se não há bots adulterando as classificações |  ALTA | 
|RNF-003| Verificar se há alguma brecha na segurança do site |  ALTA | 
|RNF-004| Verificar se as solicitações estão sendo atendidas corretamente |  ALTA | 
|RNF-005| Disponibilidade de adaptação da interface pró acessibilidade |  ALTA | 
|RNF-006| Verificar se o sistema está claro e fácil de se utilizar |  MÉDIA | 
|RNF-007| Deve processar requisições de usuário em até 3s |  BAIXA | 
|RNF-008| A página deverá ter disponibilidade em 90% do tempo |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A abrangência do projeto limita-se aos jogadores de jogos eletrônicos cooperativos |
|02| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 08/07/2022 |
|03| FrontEnd desenvolvido em HTML, CSS e JavaScript |
