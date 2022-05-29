// URL DA API DE DADOS
URL = "http://localhost:3002/usuarios"; //Usuários cadastrados

const pegarUsu = document.getElementById("pegar-usu");

pegarUsu.addEventListener(
  "click",
  (evt) => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: null,
        nome: document.getElementById("nome").value,
        senha: document.getElementById("senha").value,
      }),
    })
      .then((res) => res.json())
      .then(() => location.reload());
  },
  false
);

function logar() {
  let usuario = document.getElementById("nome");
  let senha = document.getElementById("senha");
  let listaUser = [];
  let userValid = {
    nome: " ",
    senha: " ",
  };

  listaUser = JSON.parse(URL);

  listaUser.ForEach((item) => {
    if (usuario.value == item.nome && senha.value == item.senha) {
      userValid = {
        nome: item.nome,
        senha: item.senha,
      };
    }
  });

  if (usuario.value != userValid.usuario && senha.value != userValid.senha) {
    usuario.setAttribute("style", "color-red");
    senha.setAttribute("style", "color-red");
    alert("Usuário não cadastrado");
  } else {
    window.location.href = "/src/index.html";
  }
}
