// URL DA API DE DADOS
URL = "http://localhost:3002/usuarios";

const cadastroForm = document.getElementById("cadastro-form");

cadastroForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: null,
        nome: document.getElementById("nome").value,
        senha: document.getElementById("senha").value,
        confirmarSenha: document.getElementById("confirmar-senha").value,
      }),
    })
      .then((res) => res.json())
      .then(() => location.reload());

    alert("Cadastrado!");
}, false);
