const FALLBACK_URL = "https://josefinabarra00.github.io/ccu-logos/default.png";

const MARCAS_SIN_LOGO = ["SIN MARCA", "MIXTA LA BARRA"];

function drawViz(data) {
  document.body.innerHTML = "";

  const rows = data.tables.DEFAULT.rows;
  if (!rows || rows.length === 0) {
    mostrarFallback();
    return;
  }

  const url = rows[0][0].value;
  const marca = rows[0][1] ? rows[0][1].value : "";

  if (!url || MARCAS_SIN_LOGO.includes(marca.toUpperCase())) {
    mostrarFallback();
    return;
  }

  mostrarImagen(url);
}

function mostrarImagen(url) {
  const img = document.createElement("img");
  img.src = url;
  img.onerror = () => mostrarFallback();
  img.style.cssText = `
    max-height: 80px;
    max-width: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(img);
}

function mostrarFallback() {
  const img = document.createElement("img");
  img.src = FALLBACK_URL;
  img.style.cssText = `
    max-height: 80px;
    max-width: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
    opacity: 0.4;
  `;
  document.body.appendChild(img);
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
