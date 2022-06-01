usuario = JSON.parse(window.localStorage.getItem("usuario")) 
let nomeUsuario = `<h2 class="pixxelari">${usuario.nome}</h2>`

document.getElementById("perfil-card-text").innerHTML = nomeUsuario

URL = "http://localhost:3002/usuarios"; //Usuários cadastrados

let avt = ""

if(usuario.avatar !== ""){
    let avtHtml = `<img
    src="/src/img/icones/${usuario.avatar}.png"
    class="card-img-top"
    id="imagem-de-avatar"
    alt="Avatar"
    height="200"
    />`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

function trocarImagemAvatar(avatar) {
    avt = avatar
    let avatarHtml = `<img
src="/src/img/icones/${avatar}.png"
class="card-img-top"
id="imagem-de-avatar"
alt="Avatar"
height="200"
/>`
if (document.getElementById("imagem-de-perfil") !== null){
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avatarHtml
} else {
    document.getElementById("imagem-avatar").innerHTML = avatarHtml
}

}

function salvar (){
if (document.getElementById("imagem-de-perfil") === null){
    fetch(`${URL}/${usuario.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: usuario.id,
            nome: usuario.nome,
            senha: usuario.senha,
            avatar: avt
        })
    })
    .then(res => res.json())
    .then(resposta => {
        window.localStorage.setItem("usuario", JSON.stringify({
            id: usuario.id,
            nome: usuario.nome,
            senha: usuario.senha,
            avatar: avt
        }))
        window.location.href = "http://127.0.0.1:5500/src/edicao-perfil.html";
    })
    .catch(error => console.error(error));
} else {
    alert ("Selecione um avatar antes de salvar")
}
}
