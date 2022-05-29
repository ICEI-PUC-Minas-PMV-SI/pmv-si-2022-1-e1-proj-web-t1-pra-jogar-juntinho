# Programação de Funcionalidades

Nesta seção estão descritos os artefatos e estruturas de dados criados para atender aos requisitos previstos nas <a href="./especification.md">Especificações do Projeto</a>, bem como as instruções para acesso e verificação da implementação. As tecnologias utilizadas se baseiam nas linguagens HTML, CSS e JavaScript.


## Filtro de Jogos

### Requisitos

- RF-001 - Disponibilizar área com lista de jogos eletrônicos cooperativos em categorias
- RF-003 - Filtrar jogos eletrônicos cooperativos por categorias
- RF-004 - Permitir que o usuário navegue pelas categorias de jogos

Para atender aos requisitos RF-001, RF-003 e RF-004 foi desenvolvido a página de Filtro de Jogos.

Ao acessar a página de filtro de perfil será exibido um botão do tipo `button` onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos.

>adicionar a imagem da legenda

Abaixo da legenda do lado esquerdo se encontra o Filtro de Jogos, onde o usuário podera colocar informações como nome do jogo, número de jogadores desejado, gênero e plataforma desejada, podendo assim fazer pesquisas nos jogos disponiveis no site.

>adicionar foto do filtro de jogos

O filtro é do tipo `x` que apresenta campos do tipo `y` para pesquisa de Nome do Jogo e Número de Jogadores, além de botões do tipo `z` para filtrar por gênero e plataforma. 

Feito o processo de filtro o usuário deverá clicar no botão  buscar to tipo `v` que atualizará a página com os resultados da pesquisa feita pelo usuário.

O resultado da pesquisa será apresentado ao lado do Filtro de Jogos após o usuário clicar em buscar. 

>adicionar a foto do resultado da busca

Nele aparecerão os cards dos jogos organizados `de tal maneira`.

<br/>
## Informações do Jogo

### Requisitos

- RF-002 - Exibir página com informações do jogo eletrônico cooperativo selecionado 
- RF-010 - Permitir usuário a postar comentários no jogo
- RF-011 - Exibir comentários de outro usuário na página com informações do jogo selecionado


Para atender aos requisitos RF-002, RF-010 e RF-011 foi desenvolvido a página de Informações do Jogo.

Ao clicar em um card de um jogo específico aparecerá para o usuário a página de Informações do Jogo, nela ele tera acesso à esquerda um vídeo do jogo acompanhado de uma descrição do jogo.

>adicioanar imagem do video e da descrição

O vídeo foi adicionado da `seguinte maneira` e a descrição `assim`.

Do lado direito da página aparecerá as informações do jogo, tais como uma imagem do jogo acompanhada de ícones descritivos, informações sobre o tipo de co-op disponível, as plataformas que o usuário poderá jogar o jogo, gêneros, tema e a data de lançamento.

>adicionar imagem do card lateral 

As informações foram implementadas da `seguinte maneira`.

Abaixo do vídeo e da descrição aparecerá os comentários que já foram feitos por outros usuários sobre aquele jogo, quando logado aparecerá o campo onde o usuário poderá fazer o próprio comentário.

>adicionar imagem dos comentarios sem login
>adicionar imagem dos comentarios com login

Os comentários foram feitos da `seguinte forma`

<br/>

## Login

### Requisitos
- RF-006 - Permitir login do usuário

Para atender ao requisito RF-006 foi desenvolvido a página de login.

Ao clicar em fazer login, disponível no menu da página, aparecerá os compos de login para o usuário.

>adicioanr imagem de login

Os campos de Nome/Nickname e password foram feitos `da seguinte forma`.

<br/>

## Cadastro

### Requisitos
- RF-005 - Permitir cadastro de usuário

Para atender ao requisito RF-005 foi desenvolvido a página de cadastro.

Será disponibilizado ao usuário um formulário onde ele poderá cadastras informações como Name/Nickname e senha para criar o usuário e fazer login.

>adicionar umagem da tela de cadastro.

O formulario é do tipo `x` com campos do tipo `y`.

<br/>

## Favoritar e Avaliar um Jogo

### Requisitos
- RF-007 - Permitir o usuário a favoritar jogos 
- RF-009 - Permitir usuário avaliar um jogo 

Para atender aos requisitos RF-007 e RF-009 foi desenvolvido dois botões disponiveis no card do jogo.

>adicionar imagens dos botões.

Os botões são do tipo `x`.

<br/>

## Tela de Perfil

### Requisitos
- RF-008 - Exibir lista de jogos favoritado do usuário logado

Para atender ao requisito foi desenvolvido a página de Tela de Perfil.

Ao clicar no botão de perfil no menu disponivel após o login aparecerá a tela de perfil.

>adicionar imagem da tela de perfil.

Nela o usuário podera visualizar a lista de jogos favoritadas e comentados, além de poder editar informações como o ícone de perfil, nome/nickname e senha.

São do tipo `c`.

<br/>