usuario = JSON.parse(window.localStorage.getItem("usuario")) 
let nomeUsuario = `<h2 class="pixxelari">${usuario.nome}</h2>`

if (usuario.avatar !== ""){
    let avtHtml = `<img src="/src/img/icones/${usuario.avatar}.png" class="card-img-top" alt="...">`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

document.getElementById("perfil-card-text").innerHTML = nomeUsuario

if (usuario.avatar !== ""){
    let avtHtml = `<img src="/src/img/icones/${usuario.avatar}.png" class="card-img-top" alt="...">`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

URL = "http://localhost:3001/jogos"
URL = "http://localhost:3002/usuarios"

/* Alguns erros sao devidos a nao ter achado  */ 

/*-----------------------Pegar informacoes cards desejados------------------------------------*/
const JogosDesejados = document.getElementById("Jogos-Desejados")
fetch(URL)
    .then(res => res.json())
    .then(jogos => {
        jogos = "";
        for (let i = 0; i < jogos.length; i++) {
            if (jogo[i].desejados = true) {
                sDesejados = true;
                nomeJogoDesejados = jogo[i].nome;
                capaJogoDesejados = jogo[i].capa;
            }
            else {
                nDesejados = false;
            };
        }
    })
function AlterarDesejados(sDesejados) {
    if (sDesejados = True) {
        const TrocarCardDesejados = document.getElementsByClassName(card - title, card - img - top);
        TrocarCardDesejados.innerHTML = "+nomeJogoDesejados+";
        TrocarCardDesejados.innerHTML = "+capaJogoDesejados+";
    };

    /* chamar um "for" para sempre que um card for marcado como desejado ou favorito ele puxa a funcao que vai ficar montando os cards*/

    /*-----------------------Pegar informacoes cards comentados------------------------------------*/
    const JogosComentados = document.getElementById("Jogos-Comentados")
    fetch(URL)
        .then(res => res.json())
        .then(jogos => {
            jogos = "";
            for (let i = 0; i < jogos.length; i++) {
                if (jogos[i].comentados = true) {
                    sComentados = true;
                    nomeJogoComentados = jogo[i].nome;
                    capaJogoComentados = jogo[i].capa;
                }
                else {
                    nComentados = false;
                };

            }
        })

    function AlterarComentados(sDesejados) {
        if (sDesejados = True) {
            const TrocarCardComentados = document.getElementsByClassName(card - title, card - img - top);
            TrocarCardComentados.innerHTML = "nomeJogoComentados";
            TrocarCardComentados.innerHTML = "capaJogoComentados";
        };
    }
}
