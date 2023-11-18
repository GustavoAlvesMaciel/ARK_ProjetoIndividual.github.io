var database = require("../database/config");

function autenticar(email, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
  var instrucao = `
      SELECT id, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, email, senha, genero, jogo) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, jogo, genero, senha);
  var instrucao = `
      INSERT INTO usuario (nome, email, senha, modoJogo, genero) VALUES ('${nome}', '${email}', '${senha}', '${jogo}', '${genero}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao)
    .then(result => {
      console.log("Operação bem-sucedida:", result);
      return result; // Pode retornar alguma informação relevante para sua aplicação
    })
    .catch(error => {
      console.error("Erro na operação:", error);
      throw error; // Propagar o erro para quem chamou esta função
    });
}

module.exports = {
  autenticar,
  cadastrar
};
