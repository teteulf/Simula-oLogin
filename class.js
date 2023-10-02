export default class DadosCadastrais {
  constructor(nome, email, dataDeNascimento, senha) {
    this.nome = nome;
    this.email = email;
    this.dataDeNascimento = new Date(dataDeNascimento.replace(/-/, ","));
    this.senha = senha;
  }
}
