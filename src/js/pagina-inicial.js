// URL DA API DE DADOS
URL = "https://fake-api-pra-jogar-juntinhos.herokuapp.com/jogos?_page=0&_limit=300";

// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';

  // var myHeaders = new Headers();
  // myHeaders.append('Access-Control-Allow-Origin', '*');
  // var myInit = {
  //   method: 'GET',
  //   headers: new Headers({
  //     'Content-Type': 'application/json',
  //     'Content-Encoding': 'UTF-8',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
  //   }),
  //   mode: 'no-cors',
  //   cache: 'default' 
  // };
  // fetch(`http://localhost:3000`,myInit)
  // .then((res) => console.log(res))
  // .then((artigos) => {
  //   console.log(artigos)
  // }).catch(err => console.log(err))

  // fetch(`https://www.gamespot.com/api/articles?api_key=26fe1805330b5dafd2b07677de397e70eff7426b&format=json&limit=5&sort=publish_date:desc`,myInit)
  // .then((res) => res.json())
  // .then((artigos) => {
  //   console.log(artigos)
  // }).catch(err => console.log(err))

// Buscar Artigos
fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/artigos`)
.then((res) => res.json())
.then((artigos) => {
  let botoes = `
  <button
    type="button"
    data-bs-target="#carrossel-jogos"
    data-bs-slide-to="0"
    class="active"
    aria-current="true"
    aria-label="Slide 1"
  ></button>
  <button
    type="button"
    data-bs-target="#carrossel-jogos"
    data-bs-slide-to="1"
    aria-label="Slide 2"
  ></button>
  <button
    type="button"
    data-bs-target="#carrossel-jogos"
    data-bs-slide-to="2"
    aria-label="Slide 3"
  ></button>
  <button
    type="button"
    data-bs-target="#carrossel-jogos"
    data-bs-slide-to="3"
    aria-label="Slide 4"
  ></button>
  <button
    type="button"
    data-bs-target="#carrossel-jogos"
    data-bs-slide-to="4"
    aria-label="Slide 5"
  ></button>
`
document.getElementById('botoes-carrossel').innerHTML = botoes;

  let slides = `
  <div class="carousel-item active" data-bs-interval="4000">
    <img
      src="${artigos[0].img_lg}"
      height="200"
      class="d-block w-100"
      alt="${artigos[0].title}"
    />
    <div class="bg-black pb-4 px-3 pt-3 d-none d-md-block">
      <h5 class="text-white">${artigos[0].title}</h5>
      <p class="text-white">
        ${artigos[0].description} - <i>${artigos[0].authors}</i>
      </p>
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="4000">
    <img
      src="${artigos[1].img_lg}"
      height="200"
      class="d-block w-100"
      alt="${artigos[1].title}"
    />
    <div class="bg-black pb-4 px-3 pt-3 d-none d-md-block">
      <h5 class="text-white">${artigos[1].title}</h5>
      <p class="text-white">
        ${artigos[1].description} - <i>${artigos[1].authors}</i>
      </p>
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="4000">
    <img
      src="${artigos[2].img_lg}"
      height="200"
      class="d-block w-100"
      alt="${artigos[2].title}"
    />
    <div class="bg-black pb-4 px-3 pt-3 d-none d-md-block">
      <h5 class="text-white">${artigos[2].title}</h5>
      <p class="text-white">
        ${artigos[2].description} - <i>${artigos[2].authors}</i>
      </p>
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="4000">
    <img
      src="${artigos[3].img_lg}"
      height="200"
      class="d-block w-100"
      alt="${artigos[3].title}"
    />
    <div class="bg-black pb-4 px-3 pt-3 d-none d-md-block">
      <h5 class="text-white">${artigos[3].title}</h5>
      <p class="text-white">
        ${artigos[3].description} - <i>${artigos[3].authors}</i>
      </p>
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="4000">
    <img
      src="${artigos[4].img_lg}"
      height="200"
      class="d-block w-100"
      alt="${artigos[4].title}"
    />
    <div class="bg-black pb-4 px-3 pt-3 d-none d-md-block">
      <h5 class="text-white">${artigos[4].title}</h5>
      <p class="text-white">
        ${artigos[4].description} - <i>${artigos[4].authors}</i>
      </p>
    </div>
  </div>
`
document.getElementById('artigos-carrossel').innerHTML = slides;
})
.catch(error => console.error(error));

let favoritados = []

// Buscar Favoritados
if(JSON.parse(window.localStorage.getItem("usuario")) !== null) {
  fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}`)
  .then((res) => res.json())
  .then((favoritadosRes) => {
    favoritados = favoritadosRes;
  })
  .catch(error => console.error(error));
}

// Pegar lista de jogos
fetch(URL)
  .then((res) => res.json())
  .then((jogos) => {
    // AÇÃO =================================================================================================
    // Filtra jogos com gênero Ação
    jogos = jogos.filter((j) => {
      if (j.genres != null || j.genres !== []) {
        genero = j.genres.find((g) => g === "Ação");
        genero === undefined ? false : true;
        return genero;
      } else {
        return false;
      }
    });

    let lista_jogos = "";
    // Monta a lista de jogos
    for (let i = 0; i < 20; i++) {
      let jogo = jogos[i];
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

      lista_jogos += `
    <li class="" style="
      display: inline-block;
      width: 210px;
      margin-right: 10px;"
    >
      <div class="card shadow-lg">
        <h5 class="h6 card-title titulo-jogo-card">${jogo.title}</h5>
        <img src="${jogo.img_sm}" class="card-img-top" alt="${jogo.title}">
        <div class="card-body corpo-jogo-card">
          <div class="d-flex justify-content-between">
            <div>
              ${plataformas}
            </div>
            <div>
              <i id="regular_heart_acao_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id}, 'acao')"></i>
              <i id="solid_heart_acao_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id}, 'acao')"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a></a>
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
      </div>
    </li>
    `;
    }

    // Coloca a lista de jogos na página
    document.getElementById("acao").innerHTML = lista_jogos;

    // AVENTURA =================================================================================================
    // Filtra jogos com gênero Aventura
    jogos = jogos.filter((j) => {
      if (j.genres != null || j.genres !== []) {
        genero = j.genres.find((g) => g === "Aventura");
        genero === undefined ? false : true;
        return genero;
      } else {
        return false;
      }
    });

    // Monta a lista de jogos
    lista_jogos = "";
    for (let i = 0; i < 20; i++) {
      let jogo = jogos[i];
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

      lista_jogos += `
      <li class="" style="
      display: inline-block;
      width: 210px;
      margin-right: 10px;"
    >
      <div class="card shadow-lg">
        <h5 class="h6 card-title titulo-jogo-card">${jogo.title}</h5>
        <img src="${jogo.img_sm}" class="card-img-top" alt="${jogo.title}">
        <div class="card-body corpo-jogo-card">
          <div class="d-flex justify-content-between">
            <div>
              ${plataformas}
            </div>
            <div>
              <i id="regular_heart_aventura_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id}, 'aventura')"></i>
              <i id="solid_heart_aventura_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id}, 'aventura')"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a></a>
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
      </div>
    </li>
    `;
    }

    // Coloca a lista de jogos na página
    document.getElementById("aventura").innerHTML = lista_jogos;

    // AVENTURA =================================================================================================
    // Filtra jogos com gênero Aventura
    jogos = jogos.filter((j) => {
      if (j.genres != null || j.genres !== []) {
        genero = j.genres.find((g) => g === "RPG");
        genero === undefined ? false : true;
        return genero;
      } else {
        return false;
      }
    });

    // Monta a lista de jogos
    lista_jogos = "";
    for (let i = 0; i < 20; i++) {
      let jogo = jogos[i];
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

      lista_jogos += `
      <li class="" style="
        display: inline-block;
        width: 210px;
        margin-right: 10px;"
      >
        <div class="card shadow-lg">
          <h5 class="h6 card-title titulo-jogo-card">${jogo.title}</h5>
          <img src="${jogo.img_sm}" class="card-img-top" alt="${jogo.title}">
          <div class="card-body corpo-jogo-card">
            <div class="d-flex justify-content-between">
              <div>
                ${plataformas}
              </div>
              <div>
                <i id="regular_heart_rpg_${jogo.id}" class="fa-regular fa-heart texto-vermelho ${displayNoneRegular}" onclick="favoritar(${jogo.id}, 'rpg')"></i>
                <i id="solid_heart_rpg_${jogo.id}" class="fa-solid fa-heart texto-vermelho ${displayNoneSolid}" onclick="desfavoritar(${jogo.id}, 'rpg')"></i>
                <a href="${jogo.steam_link}" target="_blank"><i class="fa-brands fa-steam texto-azul"></i></a></a>
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
        </div>
      </li>
    `;
    }

    // Coloca a lista de jogos na página
    document.getElementById("rpg").innerHTML = lista_jogos;
  });

function maisInformacoes(id, title, description, developers, distributor, serie, release_date, genres, plataforms, tags, img_sm, img_md, img_lg, trailer, steam_link) {
  window.localStorage.setItem('jogo',JSON.stringify({
    id, title, description, developers, distributor, serie, release_date, genres: genres.split(','), plataforms: plataforms.split(','), tags: tags.split(','), img_sm, img_md, img_lg, trailer, steam_link
  }))

  window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/informacoes-jogo.html";
}

function favoritar(jogoId, jogoGenero) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoGenero + '_' + jogoId).classList.add("d-none")
    document.getElementById('solid_heart_' + jogoGenero + '_' + jogoId).classList.remove("d-none")
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

function desfavoritar(jogoId, jogoGenero) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoGenero + '_' + jogoId).classList.remove("d-none")
    document.getElementById('solid_heart_' + jogoGenero + '_' + jogoId).classList.add("d-none")
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