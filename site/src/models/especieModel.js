var database = require("../database/config");

function cadastrar(especie, tipoFarm, dieta, imagem) {
  console.log("ACESSEI O ESPECIE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", especie, tipoFarm, dieta, imagem);
  var instrucao = `
    INSERT INTO especies (especie, tipoFarm, dieta, imagem) VALUES ('${especie}', '${tipoFarm}', '${dieta}', '${imagem}');
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
