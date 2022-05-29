// import usuariosLista from "./../db/usuarios.json";

// URL DA API DE DADOS
URL = "http://localhost:3002/usuarios"; //Usuários cadastrados

const logar = document.getElementById("logar");
var localStorage = Window.localStorage;
let nome = document.getElementById("nome").value;
let senha = document.getElementById("senha").value;
let validacao = false;
let usuario = {};

logar.addEventListener("click", (evt) => {
  // console.log("teste", usuariosLista.json());
  fetch(URL)
    .then((res) => {
      console.log(res);
      res.json();
    })
    .then((usuarios) => {
      console.log(usuarios);
      validacao = usuarios.some((u) => {
        if (u.nome === nome && u.senha === senha) {
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
          })
        );
      } else {
        alert("Usuário e/ou senha não encontrado, tente novamente");
        return false;
      }

      window.location.href = "http://127.0.0.1:5500/src/index.html";
    })
    .catch((error) => console.error(error));
});

// function logar() {
//   let usuario = document.getElementById("nome");
//   let senha = document.getElementById("senha");
//   let listaUser = [];
//   let userValid = {
//     nome: " ",
//     senha: " ",
//   };

//   listaUser = JSON.parse(URL);

//   listaUser.ForEach((item) => {
//     if (usuario.value == item.nome && senha.value == item.senha) {
//       userValid = {
//         nome: item.nome,
//         senha: item.senha,
//       };
//     }
//   });

//   if (usuario.value != userValid.usuario && senha.value != userValid.senha) {
//     usuario.setAttribute("style", "color-red");
//     senha.setAttribute("style", "color-red");
//     alert("Usuário não cadastrado");
//   } else {
//     window.location.href = "/src/index.html";
//   }
// }
