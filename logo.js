function drawViz(data) {
  document.body.innerHTML = "";

  const rows = data.tables.DEFAULT.rows;
  if (!rows || rows.length === 0) {
    document.body.innerHTML = "<p style='color:gray'>Sin datos</p>";
    return;
  }

  const url = rows[0][0].value;
  if (!url) {
    document.body.innerHTML = "<p style='color:gray'>Sin imagen</p>";
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.style.cssText = `
    max-height: 80px;
    max-width: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
  `;

  document.body.appendChild(img);
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
