// URL DA API DE DADOS
URL = "https://fake-api-pra-jogar-juntinhos.herokuapp.com/usuarios"; //Usuários cadastrados

const logar = document.getElementById("logar");
var localStorage = Window.localStorage;

let validacao = false;

logar.addEventListener("click", (evt) => {
  fetch(URL)
    .then((res) => res.json())
    .then((usuarios) => {
      validacao = usuarios.some((u) => {
        if (u.nome === document.getElementById("nome").value && u.senha === document.getElementById("senha").value) {
          usuario = u;
          return true;
        } else {
          return false;
        }
      });
      if (validacao) {
        localStorage.setItem(
          "usuario",
          JSON.stringify({
            id: usuario.id,
            nome: usuario.nome,
            senha: usuario.senha,
            avatar: usuario.avatar,
          })
        );
      } else {
        var modallogin = new bootstrap.Modal(document.getElementById('modallogin'), {})
        modallogin.show()
        return false;
      }

      window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/index.html";
    })
    .catch((error) => console.error(error));
});
