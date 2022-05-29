const lista_jogos = document.getElementById('lista-jogos')
const loading = document.querySelector('.loader');
const filtro_nome_jogo = document.getElementById('nome_jogo');

let limit = 21;
let page = 1;

async function getJogos() {
    const res = await fetch(
        `http://localhost:3000/jogos?_limit=${limit}&_page=${page}`
    );

    const data = await res.json();

    return data;
}

async function showJogos() {
    const jogos = await getJogos()
    jogos.forEach(jogos => {
        const jogosEl = document.createElement('div');
        jogosEl.classList.add('jogos');
        jogosEl.classList.add('col-sm-12');
        jogosEl.classList.add('col-md-12');
        jogosEl.classList.add('col-lg-4');
        jogosEl.classList.add('mb-3');
        jogosEl.innerHTML = `
        <div class="card p-3">
        <h5 class="card-title">${jogos.title}</h5>
        <img src="${jogos.img_sm}">
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
        `;

        lista_jogos.appendChild(jogosEl)
    });
}

function showLoading() {
    loading.classList.add('show');

    setTimeout(() => {
        loading.classList.remove('show')

        setTimeout(() => {
            page++;
            showJogos();
        }, 300);
    }, 1000)
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
        showLoading()
    }
});

showJogos()