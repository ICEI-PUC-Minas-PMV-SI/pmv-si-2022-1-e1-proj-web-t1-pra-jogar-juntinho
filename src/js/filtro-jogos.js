URL='http://localhost:3000/jogos'

//Listagem-jogos

const listaJogos = document.getElementById('lista-jogos')

fetch(URL)
    .then(res => res.json())
    .then(jogos => {
        let lista_jogos = '';
        for (let i = 0; i < 10; i++){
            lista_jogos += `
            <div class="col-sm-12 col-md-12 col-lg-4 mb-3">
            <div class="card p-3">
            <h5 class="card-title">${jogos[i].title}</h5>
            <img src="${jogos[i].img_sm}">
            <div class="card-body px-0 pb-0 pt-3">
                <div class="d-flex justify-content-between">
                <div>
                    <i class="fa-solid fa-users texto-azul"></i>
                    <span class="iconify texto-azul" style="width: 16px;height: 16px;vertical-align: baseline;" data-icon="bi:xbox"></span>
                    <span class="iconify texto-azul" style="width: 25px;height: 25px;vertical-align: bottom;" data-icon="mdi:sony-playstation"></span>
                    <i class="fa-solid fa-desktop texto-azul"></i>
                </div>
                <div>
                    <i class="fa-regular fa-heart texto-vermelho"></i>
                    <i class="fa-solid fa-paper-plane texto-azul"></i>
                </div>
                </div>
                <br>
                <div class="MG-INF Bottom-MaisInf d-flex justify-content-center">
                <a href="#" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
                </div>
            </div>
            </div>
            </div>
            `;
            listaJogos.innerHTML = lista_jogos;
        }
    });

const inputNome = document.getElementById('datalistOptions')

fetch(URL)
    .then(res => res.json())
    .then(jogos => {
        let nome_jogos = '';
        for (let i = 0; i < 10; i++){
            nome_jogos += `
            <option value="${jogos[i].title}">
            `;
            inputNome.innerHTML = nome_jogos;
    }
});