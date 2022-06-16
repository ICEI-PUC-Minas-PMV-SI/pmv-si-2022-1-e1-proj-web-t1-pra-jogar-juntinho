usuario = JSON.parse(window.localStorage.getItem("usuario"))
let nomeUsuario = `<h2 class="pixxelari mt-3">${usuario.nome}</h2>`

if (usuario.avatar !== ""){
    let avtHtml = `<img src="/src/img/icones/${usuario.avatar}.png" class="card-img-top" alt="${usuario.avatar}">`
    document.getElementById("imagem-de-perfil").classList.add("d-none")
    document.getElementById("imagem-avatar").innerHTML = avtHtml
}

document.getElementById("perfil-card-text").innerHTML = nomeUsuario

URL = "https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos"
URL = "https://fake-api-pra-jogar-juntinhos.herokuapp.com/usuarios"

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

async function getJogos(URL) {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
}

// Jogos Favoritados ====================================================================

async function showJogosFavoritos() {
  const favoritados = await getJogos(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${usuario.id}&_expand=jogo&_limit=${limit}&_page=${page}`);
  favoritados.forEach((favorito) => {
    let jogo = favorito.jogo;
    let plataformas = "";
    let displayNoneRegular = "";
    let displayNoneSolid = "d-none";

    if (jogo.plataforms != null || jogo.plataforms !== []) {
      jogo.plataforms.forEach((plataforma) => {
        if (plataforma === "Windows") plataformas = plataformas + icone_win;
        if (plataforma === "MacBook") plataformas = plataformas + icone_mac;
        if (plataforma === "Linux") plataformas = plataformas + icone_lin;
      });
    }

    if(favoritados.length > 0) {
      if(favoritados.some(f => f.jogoId === jogo.id)) {
        displayNoneRegular = "d-none";
        displayNoneSolid = "";
      }
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
              <i id="regular_heart_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id})"></i>
              <i id="solid_heart_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id})"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a></a>
            </div>
          </div>
        </div>
        <br>
        <div class="d-flex justify-content-center pb-3">
          <a href="#" onclick="maisInformacoes(
            ${jogo.id},
            '${jogo.title}',
            '${jogo.description}',
            '${jogo.developers}',
            '${jogo.distributor}',
            '${jogo.serie}',
            '${jogo.release_date}',
            '${jogo.genres}',
            '${jogo.plataforms}',
            '${jogo.tags}',
            '${jogo.img_sm}',
            '${jogo.img_md}',
            '${jogo.img_lg}',
            '${jogo.trailer}',
            '${jogo.steam_link}'
          )" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
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

// Jogos Comentados ====================================================================

async function showJogosComentarios() {
    const favoritados = await getJogos(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${usuario.id}&_expand=jogo&_limit=${limit}&_page=${page}`);
    const comentarios = await getJogos(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/comentarios?usuarioId=${usuario.id}`);
    let comentariosFiltrados = [];
    comentarios.forEach(c => {
      if(comentariosFiltrados.length === 0) {
        comentariosFiltrados.push(c);
      } else {
        if(comentariosFiltrados.find(cf => cf.jogoId === c.jogoId) === undefined) {
          comentariosFiltrados.push(c);
        }
      }
    })
    
   
    comentariosFiltrados.forEach(comentario => {
      fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?id=${comentario.jogoId}`)
        .then(res => res.json())
        .then(response => {
      let jogo = response[0];
      let plataformas = "";
      let displayNoneRegular = "";
      let displayNoneSolid = "d-none";
  
      if (jogo.plataforms != null || jogo.plataforms !== []) {
        jogo.plataforms.forEach((plataforma) => {
          if (plataforma === "Windows") plataformas = plataformas + icone_win;
          if (plataforma === "MacBook") plataformas = plataformas + icone_mac;
          if (plataforma === "Linux") plataformas = plataformas + icone_lin;
        });
      }

      if(favoritados.length > 0) {
        if(favoritados.some(f => f.jogoId === jogo.id)) {
          displayNoneRegular = "d-none";
          displayNoneSolid = "";
        }
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
              <i id="regular_heart_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id})"></i>
              <i id="solid_heart_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id})"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a></a>
            </div>
          </div>
        </div>
        <br>
        <div class="d-flex justify-content-center pb-3">
          <a href="#" onclick="maisInformacoes(
            ${jogo.id},
            '${jogo.title}',
            '${jogo.description}',
            '${jogo.developers}',
            '${jogo.distributor}',
            '${jogo.serie}',
            '${jogo.release_date}',
            '${jogo.genres}',
            '${jogo.plataforms}',
            '${jogo.tags}',
            '${jogo.img_sm}',
            '${jogo.img_md}',
            '${jogo.img_lg}',
            '${jogo.trailer}',
            '${jogo.steam_link}'
          )" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
          </div>
        </div>
          `;

          lista_jogos_comentados.appendChild(jogoEl);
        })
    })
}

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) showLoading();
});

this.showJogosComentarios();

function maisInformacoes(id, title, description, developers, distributor, serie, release_date, genres, plataforms, tags, img_sm, img_md, img_lg, trailer, steam_link) {
  window.localStorage.setItem('jogo',JSON.stringify({
    id, title, description, developers, distributor, serie, release_date, genres: genres.split(','), plataforms: plataforms.split(','), tags: tags.split(','), img_sm, img_md, img_lg, trailer, steam_link
  }))

  window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/informacoes-jogo.html";
}

function favoritar(jogoId) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoId).classList.add("d-none")
    document.getElementById('solid_heart_' + jogoId).classList.remove("d-none")
    fetch("https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: null,
          jogoId: jogoId,
          usuarioId: JSON.parse(window.localStorage.getItem("usuario")).id
        }),
      })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
      })
      .catch(error => console.error(error)
    );
  }
}

function desfavoritar(jogoId) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoId).classList.remove("d-none")
    document.getElementById('solid_heart_' + jogoId).classList.add("d-none")
    fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}&jogoId=${jogoId}`)
      .then((res) => res.json())
      .then((favorito) => {
        fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados/${favorito[0].id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
        })
        .catch(error => console.error(error)
      );
    })
  }
}

document.getElementById('logout').addEventListener('click', () => {
  window.localStorage.removeItem('usuario');
  window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/index.html";
})
