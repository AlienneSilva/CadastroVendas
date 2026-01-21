function Cliente (nome, nomeRepresentante, vidas){
  this.nome = nome,
  this.nomeRepresentante = nomeRepresentante,
  this.vidas = vidas
}

const container_form = {}


const CADASTRO = {}

function container_form(form){

    ``

    return form
}

const FORM = document.getElementById("cadastroForm");

    FORM.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(FORM);

      fetch("https://script.google.com/macros/s/AKfycbxpkq8Hf5gND2CR_slUr-FvwgcTTa2GR_QXoyebOMp4fIwlq6VBOLWe7_wk2SSwWMp4/exec", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(res => {
        if (res.includes("OK")) {
          alert("Cadastro enviado com sucesso!");
          // Recarrega a página, COLOCAR AS VARIAVEIS CONSTANTES COM LETRA MAIUSULA
          window.location.reload("Cadastro.html");
        } else {
          alert("Erro ao salvar: " + res);
        }
      })
      .catch(err => {
        alert("Erro na conexão com o servidor.");
        console.error(err);
      });
      FORM.reset();
    })

    