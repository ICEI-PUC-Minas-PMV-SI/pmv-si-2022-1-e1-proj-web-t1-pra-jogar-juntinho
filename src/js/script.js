let usuario = JSON.parse(window.localStorage.getItem("usuario"))

// Verifica se existe um usuário logado
if(usuario !== null) {
  const nomeUsuarioHtml = document.createElement("a");
  nomeUsuarioHtml.setAttribute("id", "botao-perfil");
  nomeUsuarioHtml.setAttribute("class", "nav-link text-white btn btn-primary btn-login");
  nomeUsuarioHtml.setAttribute("href", "/src/TelaPerfil.html");
  nomeUsuarioHtml.innerHTML = usuario.nome

  document.querySelector('.navbar-nav').children[3].classList.add("d-none");
  document.querySelector('.navbar-nav').appendChild(nomeUsuarioHtml);
}