// URL DA API DE DADOS
URL = 'http://localhost:3000/usuarios'

const cadastroForm = document.getElementById('cadastro-form');


cadastroForm.addEventListener('submit', (e) => {

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            senha: document.getElementById('senha').value,
            confirmarSenha: document.getElementById('confirmar-senha').value
        })        
    })
    .then(res => res.json())
    .then(() => location.reload());

    alert('Cadastrado!')
})