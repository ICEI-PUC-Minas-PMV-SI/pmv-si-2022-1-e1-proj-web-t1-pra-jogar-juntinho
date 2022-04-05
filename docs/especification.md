# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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
