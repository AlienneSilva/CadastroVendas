const teste = document.getElementById("x")

function gerarSequencia() {
  let tabela = "";
  const colunas = 7;

  for (let i = 1; i <= 30; i++) {
    if ((i - 1) % colunas === 0) {
      tabela += "<tr>";
    }

    tabela += `<td>${i}</td>`;

    if (i % colunas === 0) {
      tabela += "</tr>";
    }
  }

  teste.innerHTML = tabela;
}

gerarSequencia();







