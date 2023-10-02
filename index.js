import DadosCadastrais from "./Class.js";
import { desapareceLogin, verificaSenha, mostrarSenha } from "./funções.js";

const cadastro = document.querySelector("#formCadastro");
const loginForm = document.querySelector(".formLogin");
const loginButton = document.querySelector(".login");
const registroButton = document.querySelector(".cadastro");
const buttonCadastro = document.querySelector(".botaoCadastro");
const buttonEntrar = document.querySelector("#botaoLogin");
const dadosInvalidos = document.querySelector("#dadosInvalidos");
const arrayCadastros = [];
const dadoNome = document.querySelector(".nomeInput");
const dadoEmail = document.querySelector(".emailInput");
const dadoDataDeNascimento = document.querySelector(".dataInput");
const dadoSenha = document.querySelector(".senhaInput");
const dadoConfirmarSenha = document.querySelector("#confirmarSenha");
const imagemOlho = document.querySelector("#imagemOlho");
const inputSenha = document.querySelector(".inputLoginSenha");
const sectionSize = document.querySelector("#section");

dadoConfirmarSenha.addEventListener("input", (event) => {
  verificaSenha(event);
});

loginButton.addEventListener("click", () => {
  desapareceLogin(loginForm, cadastro);
});

registroButton.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  cadastro.classList.remove("hidden");
  loginForm.classList.remove("formLogin");
  cadastro.classList.add("formCadastro");

  sectionSize.style.height = "400px";
});

buttonCadastro.addEventListener("click", (event) => {
  arrayCadastros.push(
    new DadosCadastrais(
      dadoNome.value,
      dadoEmail.value,
      dadoDataDeNascimento.value,
      dadoSenha.value
    )
  );

  dadoNome.value = "";
  dadoEmail.value = "";
  dadoDataDeNascimento.value = "";
  dadoSenha.value = "";
  dadoConfirmarSenha.value = "";

  desapareceLogin(loginForm, cadastro);

  sectionSize.style.height = "340px";

  dadosInvalidos.innerText = "";

  console.log(arrayCadastros);
});

buttonEntrar.addEventListener("click", (event) => {
  let loginEmail = document.querySelector(".inputLoginEmail").value;
  let loginSenha = document.querySelector(".inputLoginSenha").value;

  if (arrayCadastros.length === 0) {
    dadosInvalidos.innerText = "*Dados inválidos*";
  } else {
    arrayCadastros.forEach((elementoArray) => {
      if (
        elementoArray.email === loginEmail &&
        elementoArray.senha === loginSenha
      ) {
        console.log("voce entrou :D");
        dadosInvalidos.innerText = "";
      } else {
        dadosInvalidos.innerText = "*Dados inválidos*";
      }
    });
  }
});

imagemOlho.addEventListener("click", function () {
  if (imagemOlho.src.endsWith("olho-block.png")) {
    imagemOlho.src = "assets/olho-vermelho.png";
    mostrarSenha(inputSenha);
  } else {
    imagemOlho.src = "assets/olho-block.png";
    mostrarSenha(inputSenha);
  }
});
