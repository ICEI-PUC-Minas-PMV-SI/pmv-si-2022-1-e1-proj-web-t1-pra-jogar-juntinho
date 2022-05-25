
URL = "http://localhost:3000/jogos"

/*-----------------------Pegar informacoes cards desejados------------------------------------*/
const JogosDesejados = document.getElementById("Jogos-Desejados")
fetch(URL)
    .then(res => res.json())
    .then(jogos => {
        let jogos = "";
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
    }

        /*-----------------------Pegar informacoes cards comentados------------------------------------*/
        const JogosComentados = document.getElementById("Jogos-Comentados")
fetch(URL)
    .then(res => res.json())
    .then(jogos => {
        let jogos = "";
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
    }