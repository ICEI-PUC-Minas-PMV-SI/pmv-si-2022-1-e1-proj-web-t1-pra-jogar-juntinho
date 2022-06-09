// URL DA API DE DADOS
URL = "http://localhost:3002/usuarios";

const cadastroForm = document.getElementById("cadastro-form");

let validacao = false

cadastroForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (document.getElementById("senha").value === document.getElementById("confirmar-senha").value) {
    fetch(URL) // Busca lista de usuários existentes
      .then((res) => res.json())
      .then((usuarios) => { // Retorna lista de usuários
        validacao = usuarios.some(u => {
          return u.nome === document.getElementById('nome').value ? true : false;
        });
        if (!validacao) { // Se o nome não estiver sendo utilizado, cadastra um novo usuário
          fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: null,
              nome: document.getElementById("nome").value,
              senha: document.getElementById("senha").value,
              avatar: ""
            }),
          })
            .then((res) => res.json())
            .then((usuario) => { // Retorna usuário cadastrado, incluindo seu ID
              localStorage.setItem( // Salva no localStorage usuário cadastrado, realizando login
                "usuario",
                JSON.stringify({
                  id: usuario.id,
                  nome: usuario.nome,
                  senha: usuario.senha,
                  avatar: usuario.avatar
                })
              );
              window.location.href = "http://127.0.0.1:5500/src/index.html";
            })
            .catch(error => console.error(error)); // Retorna error no console
        } else {
          alert("Usuário já existente, use outro nome!");
          return false;
        }
      })
  } else {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
    myModal.show()
  }
}, false);