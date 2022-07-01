let jogoDados = JSON.parse(window.localStorage.getItem('jogo'));

// Plantaformas HTML
const icone_win =
  '<i class="fa-brands fa-windows texto-azul margin-icone-plataforma"></i>';
const icone_mac =
  '<i class="fa-brands fa-apple texto-azul margin-icone-plataforma"></i>';
const icone_lin =
  '<i class="fa-brands fa-linux texto-azul margin-icone-plataforma"></i>';

let plataformas = "";
if(jogoDados.plataforms != null || jogoDados.plataforms !== []) {
  jogoDados.plataforms.forEach(p => {
    if(p === "Windows") plataformas += icone_win;
    if(p === "MacBook") plataformas += icone_mac;
    if(p === "Linux") plataformas += icone_lin;
  })
}

let generos = "";
if(jogoDados.genres != null || jogoDados.genres !== []) {
  jogoDados.genres.forEach(g => {
    generos += `
    <li>${g}</li>
    `;
  })
}

let tags = "";
if(jogoDados.tags != null || jogoDados.tags !== []) {
  jogoDados.tags.forEach(t => {
    tags += `
    <li>${t}</li>
    `;
  })
}

// Adicionando Informações do jogo no DOM
document.getElementById('trailer').src = jogoDados.trailer
document.getElementById('title').innerHTML = jogoDados.title
document.getElementById('description').innerHTML = jogoDados.description
document.getElementById('title-two').innerHTML = jogoDados.title
document.getElementById('img_sm').src = jogoDados.img_md
document.getElementById('img_sm').alt = jogoDados.title
document.getElementById('plataforms').innerHTML = plataformas
document.getElementById('genres').innerHTML = generos
document.getElementById('tags').innerHTML = tags
document.getElementById('release_date').innerHTML = jogoDados.release_date
document.getElementById('link_steam').addEventListener('click', (evt) => {window.location.href = jogoDados.steam_link})

// Verificar se o jogo foi favoritado pelo usuario
fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}&jogoId=${JSON.parse(window.localStorage.getItem("jogo")).id}`)
  .then((res) => res.json())
  .then((favorito) => {
    if(favorito.length > 0) {
      document.getElementById('regular_heart').classList.add("d-none")
      document.getElementById('solid_heart').classList.remove("d-none")
    }
  })
  .catch(error => console.error(error));


let comentarios = []
const lista_comentarios = document.getElementById("coments");

// Buscar Comentários
function buscarComentarios() {
  fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/comentarios?_expand=usuario&jogoId=${JSON.parse(window.localStorage.getItem("jogo")).id.toString()}`)
  .then((res) => res.json())
  .then((comentarios) => {
    let comentarioHTML = "";
    let backColor = "white"

    if(comentarios.length > 0) {
      comentarios.forEach(comentario => {
        let avatar = "/src/img/tela_de_perfil/perfil-de-usuario.png";
  
        if(comentario.usuario.avatar !== "") {
          avatar = '/src/img/icones/' + comentario.usuario.avatar + '.png';
          backColor = "black"
        } else {
          backColor = "white"
        }
  
        comentarioHTML += `
          <div class="mb-3">
            <h5 class="card-title">${comentario.usuario.nome}</h5>
            <div class="d-flex">
              <img src="${avatar}" width="80" height="70" style="background-color: ${backColor}">
              <div class="card w-full">
                <div class="card-body">
                  ${comentario.description}
                </div>
              </div>
            </div>
          </div>
          <hr style="height: 2px;">
        `
      })
    }

    comentarioHTML += `
      <hr>
      <div class="form-group mb-3">
        <input type="text" class="form-control" id="novo-comentario" aria-describedby="comentHelp" placeholder="Deixe aqui seu comentário">
      </div>
      <button class="btn btn-primary" onclick="comentar()">Enviar</button>
    `
    lista_comentarios.innerHTML = comentarioHTML;
  })
  .catch(error => console.error(error));
}
this.buscarComentarios();

function comentar() {
  fetch("https://fake-api-pra-jogar-juntinhos.herokuapp.com/comentarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: null,
      usuarioId: JSON.parse(window.localStorage.getItem("usuario")).id,
      jogoId: JSON.parse(window.localStorage.getItem("jogo")).id,
      description: document.getElementById('novo-comentario').value
    }),
  }).then(() => {
    this.buscarComentarios();
  }).catch(err => console.error(err))
}

function favoritar() {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart').classList.add("d-none")
    document.getElementById('solid_heart').classList.remove("d-none")
    fetch("https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: null,
          jogoId: JSON.parse(window.localStorage.getItem("jogo")).id,
          usuarioId: JSON.parse(window.localStorage.getItem("usuario")).id
        }),
      })
      .catch(error => console.error(error)
    );
  }
}

function desfavoritar() {
  if(window.localStorage.getItem('usuario') === null) {
    window.location.href = "https://meek-paprenjak-b33f2f.netlify.app/src/login.html";
  } else {
    document.getElementById('regular_heart').classList.remove("d-none")
    document.getElementById('solid_heart').classList.add("d-none")
    fetch(`https://fake-api-pra-jogar-juntinhos.herokuapp.com/favoritados?usuarioId=${JSON.parse(window.localStorage.getItem("usuario")).id}&jogoId=${JSON.parse(window.localStorage.getItem("jogo")).id}`)
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