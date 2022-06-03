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
document.getElementById('img_sm').src = jogoDados.img_sm
document.getElementById('img_sm').alt = jogoDados.title
document.getElementById('plataforms').innerHTML = plataformas
document.getElementById('genres').innerHTML = generos
document.getElementById('tags').innerHTML = tags
document.getElementById('release_date').innerHTML = jogoDados.release_date

