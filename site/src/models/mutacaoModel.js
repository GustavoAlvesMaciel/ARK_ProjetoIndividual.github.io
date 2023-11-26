var database = require("../database/config");

function cadastrar(especie, genero, ancestrais, lvl, hp, st, ox, fo, we, dm, mo) {
  console.log("ACESSEI O MUTACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", especie, genero, ancestrais, lvl, hp, st, ox, fo, we, dm, mo);
  var instrucao = `
    INSERT INTO mutacao (especie, genero, ancestrais, lvl, hp, st, ox, fo, we, dm, mo) VALUES ('${especie}', '${genero}', '${ancestrais}', '${lvl}', '${hp}', '${st}', '${ox}', '${fo}', '${we}', '${dm}', '${mo}');
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
