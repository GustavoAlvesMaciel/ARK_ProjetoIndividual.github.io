var database = require("../database/config");

function cadastrar(pontuacao, tentativa, erros) {
  console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, tentativa, erros);
  var instrucao = `
    INSERT INTO quiz (pontuacao, tentativa, erros) VALUES ('${pontuacao}', '${tentativa}', '${erros}');
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
  cadastrar
};
