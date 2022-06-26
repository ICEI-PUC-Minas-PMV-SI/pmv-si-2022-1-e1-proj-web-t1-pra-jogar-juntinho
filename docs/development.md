# Programação de Funcionalidades

Nesta seção estão descritos os artefatos e estruturas de dados criados para atender aos requisitos previstos nas <a href="./especification.md">Especificações do Projeto</a>, bem como as instruções para acesso e verificação da implementação. Desenvolvemos nosso site atráves de HTML, CSS e da linguagem JavaScript.

## Página Inicial

Aqui onde nosso site se inicia, uma tela repleta de funções que faz ligação com as demais do site. No início da página será disponibilizado um `carrossel` das principais notícias no mundo dos jogos. As notícias funcionam atráves de uma API da gamespot, e são armazenadas no arquivo `\src\db\artigos.json`. No carrossel há dois `buttons` em forma de seta para navegar entre elas.

![carrosel](img/entrega03/carrossel.JPG)

Logo em seguida será exibido um `button` que recolhe e expande (`arcodeão`) onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos que facilitará quais plataformas o jogo se encontra.

![legenda](img/entrega03/legenda.JPG)

E por fim a exibição dos jogos em formato de cards atráves de um `ul` onde cada `id` se relaciona a um gênero, que já são predefinidos.

![cards](img/entrega03/cards.JPG)

No nosso menu `Navbar` temos o botão home e a própria logo do site que redirecionam atráves de um comando `'href'` dentro de uma âncora `'a'` para a página inicial do site. Logo ao lado temos o "Quem Somos" para conhecerem melhor as pessoas envolvidas no projeto, após, o butão de "Filtro de Jogos" permite ao usuário ter mais opções de escolha na hora de filtrar seus games. Por último temos um botão de "Login" para os usuários conseguirem favoritar e comentar seus jogos favoritos!

![navbar](img/entrega03/navbar.png)


## Filtro de Jogos

### Requisitos

- RF-001 - Disponibilizar área com lista de jogos eletrônicos cooperativos em categorias
- RF-003 - Filtrar jogos eletrônicos cooperativos por categorias
- RF-004 - Permitir que o usuário navegue pelas categorias de jogos

Para atender aos requisitos RF-001, RF-003 e RF-004 foi desenvolvido a página de Filtro de Jogos.

 Abaixo da legenda do lado esquerdo se encontra o Filtro de Jogos, onde o usuário podera colocar informações como nome do jogo, gênero e plataforma desejada, podendo assim fazer pesquisas nos jogos disponíveis no site.

![filtro](img/entrega03/filtro.JPG)

Feito o processo de filtro o usuário deverá clicar no botão "buscar" de tipo `button`, ativando o evento `onclick` responsável por realizar a execução da função `getJogos();` localizada no caminho `src/js/filtro-jogos.js` que irá comparar os filtros utilizados e passará como parâmetro para realizar a busca dos jogos disponíveis na API e retornar os resultados da pesquisa feita pelo usuário. O resultado da pesquisa será apresentado ao lado do Filtro de Jogos em forma de lista, onde apareceram os cards com algumas informações do jogos, podendo também favoritar, compartilhar o link do jogo ou ver mais informações do jogos escolhido.

![filtro](img/entrega03/codigo-filtro.JPG)

A montagem dos cards dos jogos são realizadas de maneira dinâmica e para realizar essa criação de maneira dinâmica foi desenvolvido uma função `async` chamada `showJogos()` essa função basicamente pega o retorno de cada jogo da função `getJogos();` e realiza a criação do card com as informações que retornaram. Essa função é acionada sempre que a página de filtro de jogos recarrega, sempre que se é realizado um novo filtro e sempre que tem a necessidade de trazer novos jogos por meio do carregamento sob demanda.

Exemplo busca por tipo

![filtro](img/entrega03/jogos-filtrados.JPG)

A página de filtro de jogos também possui uma funcionalidade de carregamento sob demanda, isso significa que a página assim que carregada possui um número específico de cards que podem ser carregados de uma vez, porém assim que essa primeira lista de jogos chega ao fim ela realiza automáticamente uma nova busca no arquivo .json por meio do Javascript trazendo novos cards de jogos respeitando os parâmetros passado pelo filtro.

```
  window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1) showLoading(); 
  });
```

O código acima é referente ao carregamento sob demanda, esse código identifica em qual posição da página o usuário se encontra e assim que ele chegar em uma determinada parte dessa página ele realiza a função chamada `showLoading();`, a função `showLoading();` é uma função que deixa visivel ao usuário que esta havendo um novo carregamento na lista de jogos para trazer novos cards com novas opções ao usuário adicionando também mais um número de página referente aos jogos a ser consumido na API.

<br/>

## Informações do Jogo

### Requisitos

- RF-002 - Exibir página com informações do jogo eletrônico cooperativo selecionado
- RF-010 - Permitir usuário a postar comentários no jogo
- RF-011 - Exibir comentários de outro usuário na página com informações do jogo selecionado

Para atender aos requisitos RF-002, RF-010 e RF-011 foi desenvolvido a página de Informações do Jogo.

Ao clicar em um card de um jogo específico aparecerá para o usuário a página de Informações do Jogo, nela ele tera acesso à esquerda um vídeo do jogo acompanhado de uma descrição do jogo.

![telajogo](https://user-images.githubusercontent.com/101337049/175794900-26cdae67-1f1b-43df-a25a-a1c86a2fa753.jpg)

O vídeo foi adicionado da `seguinte maneira` e a descrição `assim`.
![codigo_trailer](https://user-images.githubusercontent.com/101337049/175795233-ea833a10-005c-44fd-bc94-1bb13f82afe1.png)

Do lado direito da página aparecerá as informações do jogo, tais como uma imagem do jogo acompanhada de ícones descritivos, informações sobre o tipo de co-op disponível, as plataformas que o usuário poderá jogar o jogo, gêneros, tema e a data de lançamento.

![menu-lateral](https://user-images.githubusercontent.com/101337049/175794926-6e512a88-c692-406d-87bc-7e3d2e895654.png)

As informações foram implementadas da `seguinte maneira`.

![codigo-menu-lateral](https://user-images.githubusercontent.com/101337049/175795244-998f23a7-5fff-493c-8049-4404344ea2b7.png)

Abaixo do vídeo e da descrição aparecerá os comentários que já foram feitos por outros usuários sobre aquele jogo, quando logado aparecerá o campo onde o usuário poderá fazer o próprio comentário.

![img-comentario-nlogado](img/entrega03/comentariodeslog.JPG)
![img-comentandado](img/entrega03/comentado.JPG)

![img-comentario-codigo](https://user-images.githubusercontent.com/101337049/175797769-6214dcb2-290c-4bf2-bf10-b3398e54e103.png)
Os comentários foram feitos da `seguinte forma`
## Login

### Requisitos

- RF-006 - Permitir login do usuário

Para atender ao requisito RF-006 foi desenvolvido a página de Login.

Ao clicar em fazer login, disponível no menu da página inicial, irá carregar a tela de login para o usuário.

![login](img/entrega03/login.JPG)

Será exibido dois títulos, Nome/Nickname e Password do tipo `label` respectivamente, logo em seguida mais dois campos do tipo `input` para receber os valores que o usuário digitar para fazer login no site. Os botões que são do tipo `button` com personalização do boostrap com a classe `btn-primary` são para cadastrar um usuário caso não possua acesso ao site e o outro para enviar a requisição do usuário que irá logar no site. Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados presente em `src/js/login.js`.

Em caso de erro ao autenticar o login será exibido um modal informando que os dados estão errados.

![modal-erro-login](img/entrega03/modal_usernotfound.png)

## Cadastro

### Requisitos

- RF-005 - Permitir cadastro de usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Cadastro.

Será disponibilizado ao usuário um formulário composto por `label`, `input` e um `button` onde ele poderá cadastrar suas informações como Nome/Nickname e senha para criar um usuário no site e fazer login futuramente. Estes usuários cadastrados são registrados no localStorage do navegador de acordo com a estrutura de dados presente em `src/js/cadastro.js`.

![cadastro](img/entrega03/cadastro.JPG)

Após inserir seus dados, para confirmar cadastro no Pra Jogar Juntinho basta clicar no botão "Cadastrar", então os dados informados são armazenados em um arquivo JSON `src/db/usuarios.json`. Pronto você será redirecionado para a tela inicial e agora você consegue comentar e favoritar seus jogos preferidos para poder jogar mais tarde com seus amigos. A estrutura de dados utilizada é JSON, conforme exemplo a seguir:

```
   "usuarios": [
    {
      "id": 1,
      "nome": "Lucas",
      "senha": "Brasil1010",
      "avatar": "cody"
    },
```
Em caso de erro ao autenticar o cadastro será exibido um modal informando o que não está conforme.

![modal-erro-cadastro](img/entrega03/modal_senhasdiferem.png)
![modal-erro-cadastro2](img/entrega03/modal_userexist.png)

## Favoritar e Avaliar um Jogo

### Requisitos

- RF-007 - Permitir o usuário a favoritar jogos
- RF-009 - Permitir usuário avaliar um jogo

O botão sem o jogo favoritado ficará assim:
<div align="center">

![favoritar](img/entrega03/favoritar.JPG)

</div>

E com o jogo favoritado assim:
<div align="center">

![favoritado](img/entrega03/jogo-favoritado.JPG)

</div>

Para atender ao requisito RF-007 foi desenvolvido nos cards dos jogos um botão com símbolo de coração. Se o usuário não estiver logado e tentar mesmo assim favoritar um jogo o site redireciona para a tela de login.
Caso estiver logado o evento será acionado por meio de um `onclick` executando a função `favoritar` armazenada no arquivo `src/js/informacoes-jogo.js`. Caso deseja remover dos favoritos o jogo basta clicar no ícone novamente que irá chamar a função `desfavoritar` e o mesmo será removido. Os jogos favoritados e os comentários feitos ficará disponível na tela de perfil

Agora para o requisito RF-009 foi disponilizado uma seção de comentários que se encontra na tela de Informações do Jogo.

![comentarios](img/entrega03/comentar.JPG)

No `input` você coloca o comentário que deseja sobre o jogo selecionado e para enviar basta clicar no `btn btn-primary` do Boostrap. Nesse botão se encontra um evento de `onclick` que chama a função `comentar` armazenada no arquivo `src/js/informacoes-jogo.js`. Pronto seu comentário foi publicado no site

![comentado](img/entrega03/comentado.JPG)
 
<br/>

## Tela de Perfil

### Requisitos

- RF-008 - Exibir lista de jogos favoritado do usuário logado

Para atender ao requisito foi desenvolvido a página de Tela de Perfil. Para acessar a página basta somente clicar no botão onde estiver escrito seu Nome/NickName no menu disponível após o login ser realizado.

![perfil](img/entrega03/telaPerfil.JPG)

Aqui é onde fica armazenada as informações tais como avatar de perfil, nome de usuário, jogos favoritados e comentados. Para editar o avatar de perfil foi disponibilizado um botão com ícone de lápis. Ao acionar esse botão ele carrega uma nova página armazenada no arquivo `src/troca-icone-perfil.html` que irá carregar diversas opções de avatar predefinido, basta somente escolher o desejado e clinar no botão `salvar` para confirmar sua edição. Esse botão acionará a `function salvar()` que se encontra no arquivo `src/js/troca-icone.js` e retorna para a página `src/edicao-perfil.html`.

Essa página irá carregar um `form` trazendo campos para alteração de `Nome/Nickname, password e confirmar password` e um botão `btn btn-primary` com o nome `Salvar` para salvar as informações alteradas. Essa ação é capturada por meio do DOM através do `addEventListener("click")` que se encontra no arquivo `src/js/edicao-perfil`. E um outro botão logo em baixo caso não deseje alterar nada que tem uma `href` para a página `TelaPerfil.html`.

Logo abaixo dessa tela se encontra dois `grid` que irá mostrar jogos favoritos e jogos comentados respectivamente. A seguinte `function` é acionada para carregar os jogos favoritados `async function showJogosFavoritos()` e para jogos comentados `async function showJogosComentarios()`, elas se encontram no caminho `src/js/tela-perfil`. Os jogos serão exibidos em forma de cards conforme a página inicial e se desejar você pode desfavoritar o jogo clicando no ícone `coração` para remover da sua lista, ou se deseja visualizar o jogo basta clicar no botão com o nome `Mais informações` para carregar a tela de informações do jogo.

<br/>
