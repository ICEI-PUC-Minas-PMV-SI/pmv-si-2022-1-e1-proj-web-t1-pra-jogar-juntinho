
# Projeto de Interface

<div align="justify">

O projeto de interface está organizado em 8 páginas: Homepage, Quem Somos, Filtro de Jogos, Informações de Jogo, Login, Cadastro, Perfil e Edição de Perfil. O conteúdo foi organizado de modo a incentivar, facilitar a busca por jogos cooperativos. Em todas as páginas acessadas pelo usuário, há botões que redirecionam o usuário para a homepage, quem somos e filtro de jogos, ou mesmo em algumas páginas, a possibilidade de ser redirecionado para uma página externa.

## User Flow

![Exemplo de UserFlow](img/user-flow.png)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxzo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

### Homepage

A experiência do usuário se inicia na homepage. Nela, ele poderá visualizar o layout da página e também acessar todas as seções do site (quem somos, filtro de jogos, login/perfil) através dos botões do menu de navegação, e também acessar a página de informação de um jogo ao selecionar um dos cards ao longo da página. Além disso, há também o rodapé, com logo do projeto e link para o repositório no github.

![Página Inicial](img/tela-principal.png)

A barra de navegação do site para um usuário que esta logado exibe seu nome/nikename no lugar do botão de login. Esse botão dispara um dropdown com outros dois botões, um que acessa a página de perfil e outro que faz o logout.

![Página Inicial](img/header-logado.png)

Através da homepage, no menu de navegação é possível acessar a opção "Quem Somos" que leverá o usuário até a página de identificação do projeto. Na página é possível conhecer aspectos importantes como missão, história e integrantes do projeto.

![Página Inicial](img/quem-somos.png)

> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)

 
### Feedback Positivo

Caso o cadastro seja concluído com sucesso será mostrada uma mensagem positiva e um comentário sobre os benefícios de se estar logado. Após, o usuário será levado a tela de login.

![image](https://user-images.githubusercontent.com/102264749/164342162-7513c3cf-e74d-4ba8-8a60-5f9cb12b47f0.png)

 ### Feedback Negativo

Caso o cadastro não tenha sido possível, será mostrada uma mensagem negativa pedindo a ele para tentar novamente. Nesse caso ele poderá fazer outra tentativa de cadastro ou poderá fazer login caso tenha se lembrado de alguma conta que já tenha no site.

![image](https://user-images.githubusercontent.com/102264749/164343121-e72532ca-305e-4c4f-abcd-2a98bf2d72f9.png)
</div>