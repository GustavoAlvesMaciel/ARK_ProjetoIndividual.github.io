var especieModel = require("../models/especieModel");
  
function cadastrar(req, res) {
  console.log("Rota de cadastro acionada");
  var especie = req.body.especieServer;
  var tipoFarm = req.body.tipoFarmServer;
  var dieta = req.body.dietaServer;
  var imagem = req.body.imagemServer;

  console.log("Dados recebidos do frontend:", especie, tipoFarm, dieta, imagem);

  if (especie == undefined) {
    res.status(400).send("Sua espécie está undefined!");
  } else if (tipoFarm == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (dieta == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (imagem == undefined) {
    res.status(400).send("Seu genêro está undefined!");
  } else {
    especieModel.cadastrar(especie, tipoFarm, dieta, imagem)
      .then(
        function (resultado) {
          console.log("Cadastro realizado com sucesso:", resultado);
          res.json(resultado);
        }
      )
      .catch(
        function (erro) {
          console.log(erro);
          console.error("Erro durante o cadastro:", erro);
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

module.exports = {
  cadastrar
};
