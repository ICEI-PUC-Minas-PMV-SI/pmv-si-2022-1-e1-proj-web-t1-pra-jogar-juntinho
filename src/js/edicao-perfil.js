usuario = JSON.parse(window.localStorage.getItem("usuario"))
let nomeUsuario = `<h2 class="pixxelari">${usuario.nome}</h2>`

if (usuario.avatar !== ""){
    let avtHtml = `<img src="/src/img/icones/${usuario.avatar}.png" class="card-img-top" alt="${usuario.avatar}">`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

document.getElementById('nome').value = usuario.nome
document.getElementById('senha').value = usuario.senha
document.getElementById('confirmar-senha').value = usuario.senha

document.getElementById("perfil-card-text").innerHTML = nomeUsuario

URL = "https://fake-api-pra-jogar-juntinhos.herokuapp.com/usuarios"; //Usuários cadastrados

document.getElementById("salvar").addEventListener("click",(evt) => {
    evt.preventDefault();
    console.log(document.getElementById('nome').value,
    document.getElementById('senha').value
    )
    if(document.getElementById("senha").value === document.getElementById("confirmar-senha").value){
        fetch(`${URL}/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: usuario.id,
                nome: document.getElementById('nome').value,
                senha: document.getElementById('senha').value
            })
        })
        .then(res => res.json())
        .then(resposta => {
            window.localStorage.setItem("usuario", JSON.stringify({
                id: usuario.id,
                nome: document.getElementById('nome').value,
                senha: document.getElementById('senha').value
            }))
        })
        .then(() => location.reload())
        .catch(error => console.error(error));
    } else{
        alert("Senhas não são idênticas, tente novamente.")
    }
})
  