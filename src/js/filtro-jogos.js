// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';

// Elementos do DOM
const lista_jogos = document.getElementById("lista-jogos");
const loading = document.querySelector(".loader");
const filtro_nome_jogo = document.getElementById("nome_jogo");
let nome = document.getElementById("nome_jogo").value;
let genero = document.querySelector('input[name="radio-genero"]:checked') === null ? null : document.querySelector('input[name="radio-genero"]:checked').value;
let plataforms = document.querySelector('input[name="radio-plataforma"]:checked') === null ? null : document.querySelector('input[name="radio-plataforma"]:checked').value;

// Parâmetros da rota
let limit = 10;
let page = 1;

async function getJogos() {
  if (genero === null && nome === null && plataforms === null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}`;
  } else if (genero !== null && nome === null && plataforms === null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&genres=${genero}`;
  } else if (genero === null && nome !== null && plataforms === null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&title_like=${nome.replace(' ', '%20')}`
  } else if (genero !== null && nome !== null && plataforms === null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&genres=${genero}&title_like=${nome.replace(' ', '%20')}`
  } else if (genero === null && nome === null && plataforms !== null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&plataforms=${plataforms}`
  } else if (genero !== null && nome === null && plataforms !== null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&genres=${genero}&plataforms=${plataforms}`
  } else if (genero !== null && nome !== null && plataforms !== null) {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}&genres=${genero}&plataforms=${plataforms}&title_like=${nome.replace(' ', '%20')}`
  }
  const res = await fetch(URL);
  const data = await res.json();

  return data;
}

async function showJogos() {
  const jogos = await getJogos();
  jogos.forEach((jogo) => {
    let plataformas = "";

    if (jogo.plataforms != null || jogo.plataforms !== []) {
      jogo.plataforms.forEach((plataforma) => {
        if (plataforma === "Windows") plataformas = plataformas + icone_win;
        if (plataforma === "MacBook") plataformas = plataformas + icone_mac;
        if (plataforma === "Linux") plataformas = plataformas + icone_lin;
      });
    }

    const jogoEl = document.createElement("div");
    jogoEl.classList.add("jogos");
    jogoEl.classList.add("col-sm-12");
    jogoEl.classList.add("col-md-12");
    jogoEl.classList.add("col-lg-4");
    jogoEl.classList.add("mb-3");
    jogoEl.innerHTML = `

      <div class="card shadow-lg">
        <h5 class="h6 card-title titulo-jogo-card">${jogo.title}</h5>
        <img src="${jogo.img_sm}" class="card-img-top" alt="${jogo.title}">
        <div class="card-body corpo-jogo-card">
          <div class="d-flex justify-content-between">
            <div>
              ${plataformas}
            </div>
            <div>
              <i class="fa-regular fa-heart texto-vermelho"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
            </div>
          </div>
        </div>
        <br>
        <div class="d-flex justify-content-center pb-3">
          <a href="http://localhost:3001/jogos/${jogo.id}" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
        </div>
      </div>
        `;

    lista_jogos.appendChild(jogoEl);
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showJogos();
    }, 300);
  }, 1000);
}

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) showLoading();
});

// // Filtra jogos com gênero Aventura
// jogos = jogos.filter((j) => {
//   if (j.genres != null || j.genres !== []) {
//     genero = j.genres.find((g) => g === "RPG");
//     genero === undefined ? false : true;
//     return genero;
//   } else {
//     return false;
//   }
// });

this.showJogos();

async function filtrarJogos() {
  page = 1
  nome = document.getElementById("nome_jogo").value;
  genero = document.querySelector('input[name="radio-genero"]:checked') === null ? null : document.querySelector('input[name="radio-genero"]:checked').value;
  lista_jogos.innerHTML = "";
  this.showJogos();
}
