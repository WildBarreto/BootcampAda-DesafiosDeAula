class SistemaDeLogin {
  constructor() {
    this.usuarios = []

    console.log(this.usuarios)
  }

  cadastrarUsuario(nome, senha) {
    const novoUsuario = {
      nome: nome,
      senha: senha,
    }
    this.usuarios.push(novoUsuario)

    alert(`Usuario ${nome} cadastrado com sucesso!`)
  }

  realizarLogin(nome, senha) {
    try {
      const dadosLogin = this.usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senha);
      if (dadosLogin) {
        alert(`Login realizado com sucesso`)
        this.exibirMensagemPersonalizada(nome)
      } else {
        throw new Error("Login ou senha inválidos.")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  exibirMensagemPersonalizada(nome) { 
    alert(`Bem-vindo, ${nome}!`)
  }
}

const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
// Saída esperada: Bem-vindo, usuario1!