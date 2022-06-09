usuario = JSON.parse(window.localStorage.getItem("usuario"))
let nomeUsuario = `<h2 class="pixxelari mt-3">${usuario.nome}</h2>`

if (usuario.avatar !== ""){
    let avtHtml = `<img src="/src/img/icones/${usuario.avatar}.png" class="card-img-top" alt="...">`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

document.getElementById("perfil-card-text").innerHTML = nomeUsuario

URL = "http://localhost:3001/jogos"
URL = "http://localhost:3002/usuarios"

// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';

// Elementos do DOM
const lista_jogos_favoritos = document.getElementById("lista-jogos-favoritos");
const lista_jogos_comentados = document.getElementById("lista-jogos-comentados");
const loading = document.querySelector(".loader");

// Parâmetros da rota
let limit = 10;
let page = 1;

async function getJogos() {
    URL = `http://localhost:3001/jogos?_limit=${limit}&_page=${page}`;

  const res = await fetch(URL);
  const data = await res.json();

  return data;
}

async function showJogosFavoritos() {
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
    jogoEl.classList.add("col-lg-6");
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

        lista_jogos_favoritos.appendChild(jogoEl);
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showJogosFavoritos();
    }, 300);
  }, 1000);
}

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) showLoading();
});

this.showJogosFavoritos();

async function showJogosComentarios() {
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
      jogoEl.classList.add("col-lg-6");
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
  
          lista_jogos_comentados.appendChild(jogoEl);
    });
  }
  
  function showLoading() {
    loading.classList.add("show");
  
    setTimeout(() => {
      loading.classList.remove("show");
  
      setTimeout(() => {
        page++;
        showJogosComentarios();
      }, 300);
    }, 1000);
  }
  
  window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1) showLoading();
  });
  
  this.showJogosComentarios();


// /* Alguns erros sao devidos a nao ter achado  */ 

// /*-----------------------Pegar informacoes cards desejados------------------------------------*/
// const JogosDesejados = document.getElementById("Jogos-Desejados")
// fetch(URL)
//     .then(res => res.json())
//     .then(jogos => {
//         jogos = "";
//         for (let i = 0; i < jogos.length; i++) {
//             if (jogo[i].desejados = true) {
//                 sDesejados = true;
//                 nomeJogoDesejados = jogo[i].nome;
//                 capaJogoDesejados = jogo[i].capa;
//             }
//             else {
//                 nDesejados = false;
//             };
//         }
//     })
// function AlterarDesejados(sDesejados) {
//     if (sDesejados = True) {
//         const TrocarCardDesejados = document.getElementsByClassName(card - title, card - img - top);
//         TrocarCardDesejados.innerHTML = "+nomeJogoDesejados+";
//         TrocarCardDesejados.innerHTML = "+capaJogoDesejados+";
//     };

//     /* chamar um "for" para sempre que um card for marcado como desejado ou favorito ele puxa a funcao que vai ficar montando os cards*/

//     /*-----------------------Pegar informacoes cards comentados------------------------------------*/
//     const JogosComentados = document.getElementById("Jogos-Comentados")
//     fetch(URL)
//         .then(res => res.json())
//         .then(jogos => {
//             jogos = "";
//             for (let i = 0; i < jogos.length; i++) {
//                 if (jogos[i].comentados = true) {
//                     sComentados = true;
//                     nomeJogoComentados = jogo[i].nome;
//                     capaJogoComentados = jogo[i].capa;
//                 }
//                 else {
//                     nComentados = false;
//                 };

//             }
//         })

//     function AlterarComentados(sDesejados) {
//         if (sDesejados = True) {
//             const TrocarCardComentados = document.getElementsByClassName(card - title, card - img - top);
//             TrocarCardComentados.innerHTML = "nomeJogoComentados";
//             TrocarCardComentados.innerHTML = "capaJogoComentados";
//         };
//     }
// }
