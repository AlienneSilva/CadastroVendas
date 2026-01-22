const form_input = document.getElementById('form_input');
const FORM = document.getElementById('FORM');

// ===== SELECT DE CIDADES =====
const selecaoCidades = [
  { Cidade: 'Santos' },
  { Cidade: 'Praia Grande' },
  { Cidade: 'São Vicente' },
  { Cidade: 'Cubatão' },
  { Cidade: 'Guarujá' }
];

const selecaoHtml = `
  <option selected disabled value="">Selecione</option>
` + selecaoCidades.map(c => `<option>${c.Cidade}</option>`).join("");

form_input.innerHTML = selecaoHtml;

// ===== ENVIO DO FORMULÁRIO =====
FORM.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const formData = new FormData(FORM);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxpkq8Hf5gND2CR_slUr-FvwgcTTa2GR_QXoyebOMp4fIwlq6VBOLWe7_wk2SSwWMp4/exec",
      {
        method: "POST",
        body: formData
      }
    );

    const resText = (await response.text()).trim();
    console.log("Resposta do servidor:", resText);

    if (resText.toLowerCase().includes("sucesso")) {
      alert("Cadastro enviado com sucesso!");
      FORM.reset(); // limpa para limpar o formulario quando salva
      window.location.href = "Cadastro.html";
    } else {
      alert("Erro ao salvar: " + resText);
    }

  } catch (err) {
    console.error(err);
    alert("Erro na conexão com o servidor.");
  }
});

