// URL DA API DE DADOS
URL = "http://localhost:3001/jogos?_page=0&_limit=300";

// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';


let favoritados = []

// Buscar Favoritados
fetch(`http://localhost:3001/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}`)
  .then((res) => res.json())
  .then((favoritadosRes) => {
    favoritados = favoritadosRes;
  })
  .catch(error => console.error(error)
);

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
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
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
              <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
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
                <a href="${jogo.steam_link}" target="_blank"><i class="fa-solid fa-paper-plane texto-azul"></i></a>
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

  window.location.href = "http://127.0.0.1:5500/src/informacoes-jogo.html";
}

function favoritar(jogoId, jogoGenero) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "http://127.0.0.1:5500/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoGenero + '_' + jogoId).classList.add("d-none")
    document.getElementById('solid_heart_' + jogoGenero + '_' + jogoId).classList.remove("d-none")
    fetch("http://localhost:3001/favoritados", {
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

function desfavoritar(jogoId, jogoGenero) {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "http://127.0.0.1:5500/src/login.html";
  } else {
    document.getElementById('regular_heart_' + jogoGenero + '_' + jogoId).classList.remove("d-none")
    document.getElementById('solid_heart_' + jogoGenero + '_' + jogoId).classList.add("d-none")
    fetch(`http://localhost:3001/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}&jogoId=${jogoId}`)
      .then((res) => res.json())
      .then((favorito) => {
        console.log("teste2",favorito[0].id);
        fetch(`http://localhost:3001/favoritados/${favorito[0].id}`, {
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