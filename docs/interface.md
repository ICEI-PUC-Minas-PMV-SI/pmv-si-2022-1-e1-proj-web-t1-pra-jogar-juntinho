
# Projeto de Interface

<div align="justify">

O projeto de interface está organizado em 8 páginas: Homepage, Quem Somos, Filtro de Jogos, Informações de Jogo, Login, Cadastro, Perfil e Edição de Perfil. O conteúdo foi organizado de modo a incentivar, facilitar a busca por jogos cooperativos. Em todas as páginas acessadas pelo usuário, há botões que redirecionam o usuário para a homepage, quem somos e filtro de jogos, ou mesmo em algumas páginas, a possibilidade de ser redirecionado para uma página externa.

## User Flow

<div align="center">

![Exemplo de UserFlow](img/user-flow.png)

</div>

## Wireframes

### Homepage

A experiência do usuário se inicia na homepage. Nela, ele poderá visualizar o layout da página e também acessar todas as seções do site (quem somos, filtro de jogos, login/perfil) através dos botões do menu de navegação, e também acessar a página de informação de um jogo ao selecionar um dos cards ao longo da página. Além disso, há também o rodapé, com logo do projeto e link para o repositório no github.

<div align="center">

![Página Inicial](img/tela-principal.png)

</div>

A barra de navegação do site para um usuário que esta logado exibe seu nome/nikename no lugar do botão de login. Esse botão dispara um dropdown com outros dois botões, um que acessa a página de perfil e outro que faz o logout.

<div align="center">

![Página Inicial](img/header-logado.png)

</div>

Através da homepage, no menu de navegação é possível acessar a opção "Quem Somos" que leverá o usuário até a página de identificação do projeto. Na página é possível conhecer aspectos importantes como missão, história e integrantes do projeto.

<div align="center">

![Página Inicial](img/quem-somos.png)

</div>

### Login

A partir da Homepage, utilizando o menu de navegação, o usuário irá clicar no botão "Login" para acessar a página. Com a página carregada ele irá encontrar dois campos de Nome e Senha. Campos pra preencher com os dados do usuário que já possui cadastro no site  

<div align="center">

![Login](img/login.png)

</div>

### Cadastro

Caso o usuário não tem cadastro, ele irá encontrar mais a baixo do site o botão "Inscrever-se no Pra Jogar Juntinho". Clicando nesse botão o usuário será redirecionado para uma nova tela, que é a de Cadastro. Nessa tela ele irá colocar Seu nome ou nick para a identificação no site, e uma senha para fazer login futuramente. Com os campos preenchidos basta clicar no botão de “Inscreva-se” para confirmar seu cadastro.

<div align="center">

![Cadastro no Site](img/cadastro.png)

</div>
 
### Feedback Positivo

Caso o cadastro seja concluído com sucesso será mostrada uma mensagem positiva e um comentário sobre os benefícios de se estar logado. Após, o usuário será levado a tela de login.

<div align="center">

![Feedback Positivo](https://user-images.githubusercontent.com/102264749/164342162-7513c3cf-e74d-4ba8-8a60-5f9cb12b47f0.png)

</div>

 ### Feedback Negativo

Caso o cadastro não tenha sido possível, será mostrada uma mensagem negativa pedindo a ele para tentar novamente. Nesse caso ele poderá fazer outra tentativa de cadastro ou poderá fazer login caso tenha se lembrado de alguma conta que já tenha no site.

<div align="center">

![Feedback Negativo](https://user-images.githubusercontent.com/102264749/164343121-e72532ca-305e-4c4f-abcd-2a98bf2d72f9.png)
 
</div>
 
 ### Tela do Jogo não logado
 
Quando o acesso é feito na página do jogo e não está logado, informamos um trailer do jogo como tela principal, três ícones acima dessa tela que são referentes a lista de desejos, ranking que o jogo ocupa no site, e função de compartilhamento. É mostrado abaixo do trailer uma lista de jogos relacionados, e na parte esquerda ao trailer mostramos uma foto miniatura do jogo e informações de preço e feedback positivo ou negativo com base nas análises dos usuários.
 
<div align="center">
 
![tela1](https://user-images.githubusercontent.com/101337049/165205713-aac259d6-aaa9-4588-a1e5-aa8d4a143328.png)
 
</div>

### Tela do jogo logado
 
Quando o acesso é feito na página do jogo e está logado, informamos além do conteúdo anterior, o privilégio do usuário opinar sobre qualquer jogo presente e influenciar a posição dele no ranking, e isso é contabilizado e realizado por comentários e avaliações feitas através de botões de "likes" ou "deslikes" que o jogo obter na semana, o usuário terá acesso a avaliações passadas para poder obter ampla perspectiva tanto dele quanto de outros usuários para concluir se determinado jogo vale ou não a pena.
 
<div align="center">
 
![tela2](https://user-images.githubusercontent.com/101337049/165207151-fa3abd29-c29f-4945-90af-1fb9fc4e565d.png)
 
</div>

### Listagem de jogos

Na tela de listagem de jogos temos uma das principais funcionalidades do site, que seria o filtro de jogos, onde podemos pesquisar um jogo específico, gêneros de jogos para achar não somente um mas vários jogos, alterar a ordenação em que os cards aparecem e uma plataforma em específico, ao clicar em algum card de jogo você é levado a uma página para acessar informações adicionais.

<div align="center">
 
![tela1](img/listagem-jogos.PNG)
 
</div>