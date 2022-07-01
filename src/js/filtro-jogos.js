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

let favoritados = []

let showAlertJogos = false;

// Buscar Favoritados
fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}`)
  .then((res) => res.json())
  .then((favoritadosRes) => {
    favoritados = favoritadosRes;
  })
  .catch(error => console.error(error)
);

async function getJogos() {
  if (genero === null && nome === "") {
    URL = `https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?_limit=${limit}&_page=${page}`;
  } else if (genero !== null && nome === "") {
    URL = `https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?_limit=${limit}&_page=${page}&genres=${genero}`;
  } else if (genero === null && nome !== "") {
    URL = `https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?_limit=${limit}&_page=${page}&title_like=${nome.replace(' ', '%20')}`
  } else if (genero !== null && nome !== "") {
    URL = `https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?_limit=${limit}&_page=${page}&genres=${genero}&title_like=${nome.replace(' ', '%20')}`
  }

  const res = await fetch(URL);
  const data = await res.json();
  let teste = [];

  if(document.querySelector('input[name="radio-plataforma"]:checked') !== null) {
    if(document.querySelector('input[name="radio-plataforma"]:checked').value !== null) {
      data.forEach(j => {
        if(j.plataforms.some(p => p === document.querySelector('input[name="radio-plataforma"]:checked').value)) {
          teste.push(j);
        }
      })
    }
  }
  if(document.querySelector('input[name="radio-plataforma"]:checked') !== null) {
    if(document.querySelector('input[name="radio-plataforma"]:checked').value !== null) {
      return teste;
    } else {
      return data;
    }
  } else {
    return data;
  }
}

async function showJogos() {
  const jogos = [];
  jogos = await getJogos();
  if(jogos.length > 0) {
    if(showAlertJogos === true) document.getElementById('alert-jogos').classList.add("d-none")
    jogos.forEach((jogo) => {
      let plataformas = "";
      let displayNoneRegular = "";
      let displayNoneSolid = "d-none";
  
      if (jogo.plataforms != null || jogo.plataforms !== []) {
        jogo.plataforms.forEach((plataforma) => {
          if (plataforma === "Windows")
            plataformas = plataformas + icone_win;
          if (plataforma === "MacBook")
            plataformas = plataformas + icone_mac;
          if (plataforma === "Linux")
            plataformas = plataformas + icone_lin;
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
      jogoEl.classList.add("col-lg-4");
      jogoEl.classList.add("mb-3");
      jogoEl.innerHTML = `
  
        <div class="card-jogo-animacao card shadow-lg">
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
          )" style="text-decoration: none; color: #000;">
            <h5 class="h6 card-title titulo-jogo-card">${jogo.title}</h5>
            <img src="${jogo.img_sm}" class="card-img-top" alt="${jogo.title}">
          </a>
          <div class="card-body corpo-jogo-card">
            <div class="d-flex justify-content-between">
              <div>
                ${plataformas}
              </div>
              <div>
              <i id="regular_heart_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id})"></i>
              <i id="solid_heart_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id})"></i>
                <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a>
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
  
      lista_jogos.appendChild(jogoEl);
    });
  } else {
    document.getElementById('alert-jogos').classList.remove("d-none")
    showAlertJogos = true;
  }
}

function maisInformacoes(id, title, description, developers, distributor, serie, release_date, genres, plataforms, tags, img_sm, img_md, img_lg, trailer, steam_link) {
  window.localStorage.setItem('jogo',JSON.stringify({
    id, title, description, developers, distributor, serie, release_date, genres: genres.split(','), plataforms: plataforms.split(','), tags: tags.split(','), img_sm, img_md, img_lg, trailer, steam_link
  }))

  window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/informacoes-jogo.html";
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

this.showJogos();

async function filtrarJogos() {
  page = 1
  nome = document.getElementById("nome_jogo").value;
  genero = document.querySelector('input[name="radio-genero"]:checked') === null ? null : document.querySelector('input[name="radio-genero"]:checked').value;
  lista_jogos.innerHTML = "";
  this.showJogos();
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
        .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }
}
