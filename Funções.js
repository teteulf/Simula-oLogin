function desapareceLogin(loginForm, cadastro) {
  loginForm.classList.remove("hidden");
  cadastro.classList.add("hidden");
  loginForm.classList.add("formLogin");
  cadastro.classList.remove("formCadastro");
}

const dadoSenha = document.querySelector(".senhaInput");

function verificaSenha(event) {
  const mensagem = document.querySelector("#senhaIncompativel");

  if (event.target.value !== dadoSenha.value) {
    mensagem.innerText = "As senhas precisam ser as mesmas";
  } else {
    mensagem.innerText = "";
  }
}
function mostrarSenha(inputPassword) {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}

export { desapareceLogin, verificaSenha, mostrarSenha };
