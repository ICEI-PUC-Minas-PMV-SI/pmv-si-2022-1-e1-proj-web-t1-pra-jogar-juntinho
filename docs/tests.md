# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir o index, é esperado que sejam carregados em formato de listas os cards de jogos eletrônicos cooperativos por categorias, bem como a topbar e a footbar. |
|TF-002| Home | Ao clicar em "Home" é esperado que o usuário seja direcionado para a página index.|
|TF-003| Home | Ao clicar em "Quem Somos" é esperado que o usuário seja direcionado para a página "Quem Somos"|
|TF-004| Home | Ao clicar em "Filtro de Jogos" é esperado que o usuário seja direcionado para a página "Filtro de Jogos".|
|TF-005| Home | Ao clicar em "Login" é esperado que o usuário seja direcionado para a página "Login".|
|TF-006| Home | É esperado que haja cinco notícias no carrossel de notícias. Elas devem ser notícias diferentes.|
|TF-007| Home | É esperado que haja um botão que recolhe e expande onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos que facilitará quais plataformas o jogo se encontra.|
|TF-008| Filtro de Jogos | Ao carregar a página é esperado que haja um botão que recolhe e expande onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos que facilitará quais plataformas o jogo se encontra.|
|TF-009| Filtro de Jogos | Ao carregar a página é esperado que haja um filtro onde o usuario poderá colocar informações como nome do jogo, gênero e plataforma desejada|
|TF-010| Filtro de Jogos | Ao clicar em "Buscar" o filtro deve retornar os jogos presentes no site que correspondam aos critérios adicionados pelo usuário.|
|TF-011| Login | Ao carregar a página é esperado um formulário onde o usuario poderá preencher com nome/nickname e senha.|
|TF-012| Login | Ao clicar em "Entrar" é esperado que o usuário seja direcionado para a página index com o usuário logado.|
|TF-013| Login | Ao clicar em "Entrar" e os dados de login não existirem no banco de dados é esperado um modal que informe que Usuário e/ou senha não foram encontrados.|
|TF-014| Login | Ao clicar em "Cadastrar" é esperado que o usuário seja direcionado para a página de cadastro.|
|TF-015| Cadastro | Ao carregar a página é esperado um formulário onde o usuário poderá preencher informações como Nome/Nickname e senha para criar um usuário no site e fazer login futuramente.|
|TF-016| Cadastro | Ao clicar em "Cadastrar" é esperado que o usuário seja direcionado para a página index com o usuário logado.|
|TF-017| Card de Jogo | No card de cada Jogo ao clicar em "Mais Informações" é esperado que o usuário seja direcionado para a página do jogo selecionado.|
|TF-018| Página do Jogo | Ao carregar a página é esperado informações como o vídeo do jogo e uma descrição do jogo, imagem do jogo acompanhada de ícones descritivos, as plataformas que o usuário poderá jogar o jogo, gêneros, tags, tema e a data de lançamento, bem como uma área de comentários dos usuários.|
|TF-019| Página do Jogo | É esperado que o usuário possa clicar no botão em formato de coração favoritando o jogo.|
|TF-019| Página do Jogo | Ao clicar em "Deixe aqui seu comentário" é esperado que o usuário possa digitar seu comentário.|
|TF-020| Página do Jogo | Ao clicar em "Enviar" é esperado que o comentário seja enviado e apareça na página do jogo.|
|TF-021| Card de Jogo | No card de cada Jogo é esperado que o usuário possa clicar no botão em formato de coração favoritando o jogo.|
|TF-022| Botão de Perfil | Ao clicar no botão com o nome do usuário (que substitui o botão de login) é esperado que o usuário seja direcionado para a página de perfil do usuário.|
|TF-023| Perfil de usuário | Ao carregar a página é esperado a foto de perfil do usuário, nome do perfil, duas listas com cards de jogos favoritados e outra de jogos comentados.|
|TF-024| Perfil de usuário | Ao clicar em "Editar Perfil" é esperado que o usuário seja direcionado para a página de edição do perfil.|
|TF-025| Perfil de usuário | Ao clicar em "Logout" é esperado que o usuário seja direcionado para a página index com o usuário deslogado.|
|TF-026| Edição de Perfil | Ao carregar a página é esperado um formulário que o usuário poderá editar as informações de login nome/nickname e senha.|
|TF-027| Edição de Perfil | Ao clicar em "salvar" é esperado que a página seja recarregada com as informações atualizada.|
|TF-028| Edição de Perfil | Ao clicar no ícone de edição da foto de perfil é esperado que o usuário seja direcionado para a página de edição do ícone de perfil.|
|TF-029| Edição de Perfil | Ao clicar em "Voltar ao Perfil" é esperado que o usuário seja direcionado para a página de Perfil.|
|TF-030| Edição de Ícone de Perfil | Ao carregar a página é esperado uma lista de ícones pré definidos que poderão ser utilizados pelo usuário.|
|TF-031| Edição de Ícone de Perfil | Ao clicar em algum ícone é esperado que o ícone de perfil do usuário seja substituído pela selecionada.|
|TF-032| Edição de Ícone de Perfil | Ao clicar em "Salvar" é esperado que o usuário seja direcionado para a página de Edição de Perfil com o ícone atualizado.|

# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|TF-001| Home | Os cards são carregados corretamente. | Não |
|TF-002| Home | O usuário é direcionado para a página Index. |Não |
|TF-003| Home | O usuário é direcionado para a página Quem Somos. |Não |
|TF-004| Home | O usuário é direcionado para a página Filtro de Jogos. | Não |
|TF-005| Home | O usuário é direcionado para a página de Login. | Não |
|TF-006| Home | O carrossel é exibido com cinco notícias diferentes. | Não |
|TF-007| Home | O botão funciona corretamente. | Não |
|TF-008| Filtro de Jogos | O botão funciona corretamente. | Não |
|TF-009| Filtro de Jogos | O filtro é exibido corretamente. | Não |
|TF-010| Filtro de Jogos | Os resultados são retornados conforme solicitação. | Não |
|TF-011| Login | O formulário é exibido corretamente. | Não |
|TF-012| Login | O usuário é direcionado para a página Index logado. | Não |
|TF-013| Login | O modal aparece corretamente. | Não |
|TF-014| Login | O usuário é direcionado para a página de cadastro. | Não |
|TF-015| Cadastro | O formulário é exibido corretamente. | Não |
|TF-016| Cadastro | O usuário é direcionado para a página Index logado. | Não |
|TF-017| Card do Jogo | O usuário é direcionado para a página do Jogo Solicitada. | Não |
|TF-018| Página do Jogo | As informações da página são exibidas corretamente. | Não |
|TF-019| Página do Jogo | O botão de favoritar funciona corretamnete. | Não |
|TF-019| Página do Jogo | O usuário pode realizar comentários. | Não |
|TF-020| Página do Jogo | O comentário é enviado mas a página não é carregada para que ele apareça. Qualquer usuário pode deletar comentários de um outro usuário. | Sim |
|TF-021| Card de Jogo | O botão de favoritar funciona corretamnete. |Não |
|TF-022|Botão de Perfil | O usuário é direcionado para a página de perfil do usuário. | Não |
|TF-023| Perfil de usuário | A página é carregada corretamente. | Não |
|TF-024| Perfil de usuário | O usuário é direcionado para a página de Edição de Perfil. | Não |
|TF-025| Perfil de usuário | O usuário é direcionado para a página Index com o usuário deslogado. | Não |
|TF-026| Edição de Perfil | O formulário é exibido corretamente. | Não |
|TF-027| Edição de Perfil | A página é recarregada com as informações atualizadas. | Não |
|TF-028| Edição de Perfil | O usuário é direcionado para a página de Edição de Ícone de Perfil. | Não |
|TF-029| Edição de Perfil | O usuário é direcionado para a página de Perfil. | Não |
|TF-030| Edição de Ícone de Perfil | A página é exibida corretamente. | Não |
|TF-031| Edição de Ícone de Perfil | O ícone é atualizado corretamente. | Não |
|TF-032| Edição de Ícone de Perfil | O usuário é direcionado para a página de Perfil com o ícone atualizado. | Não |

## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 23 de Junho de 2022 às 18h42.

Foi reportado o seguintes bugs:

 * (TF-020) O comentário é enviado mas a página não é carregada para que ele apareça.

O bug foi resolvido com testes no dia 01 de Julho de 2022 as 19:43 com a implementação de uma nova function para recarregar os comentários quando a página do jogos for aberta e quando publicar um novo comentário.

* (TF- 020) Um usuário podia deletar comentários de outros usuários.

Foi criada uma validação para verificar se o Id de um é diferente de outro. Se for diferente o botão para deletar comentários é escondido nos comentários de outros usuários.

<hr>
 
<p align="left"><a href="./development.md">Programação de Funcionalidades</a>