// URL = "http://www.gamespot.com/api/articles/?api_key=26fe1805330b5dafd2b07677de397e70eff7426b&format=json";

// let img = "";

// fetch(URL,{method: 'GET', mode: 'no-cors'})
//   .then((res) => {
//     console.log(res)
//     res.json()})
//   .then((releases) => {
//     console.log(releases)
//     // img = releases.results[0].images_api_url;
//   })

//   // document.getElementById('teste').innerHTML = `<img src="${img}" alt="">`

// URL DA API DE DADOS
URL = "http://localhost:3001/jogos?_page=0&_limit=300";

// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';

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
              <i class="fa-regular fa-heart texto-vermelho"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
            </div>
          </div>
          <br>
          <div class="d-flex justify-content-center">
            <a href="http://localhost:3001/jogos/${jogo.id}" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
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
              <i class="fa-regular fa-heart texto-vermelho"></i>
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
            </div>
          </div>
          <br>
          <div class="d-flex justify-content-center">
            <a href="http://localhost:3001/jogos/${jogo.id}" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
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
                <i class="fa-regular fa-heart texto-vermelho"></i>
                <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
              </div>
            </div>
            <br>
            <div class="d-flex justify-content-center">
              <a href="http://localhost:3001/jogos/${jogo.id}" class="btn btn-vermelho text-white link-jogo">Mais informações</a>
            </div>
          </div>
        </div>
      </li>
    `;
    }

    // Coloca a lista de jogos na página
    document.getElementById("rpg").innerHTML = lista_jogos;
  });