var especieModel = require("../models/especieModel");
  
function cadastrar(req, res) {
  console.log("Rota de cadastro acionada");
  var especie = req.body.especieServer;
  var tipoFarm = req.body.tipoFarmServer;
  var dieta = req.body.dietaServer;
  var idUser = req.body.idUser;


  console.log("Dados recebidos do frontend:", especie, tipoFarm, dieta, idUser);

  if (especie == undefined) {
    res.status(400).send("Sua espécie está undefined!");
  } else if (tipoFarm == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (dieta == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    especieModel.cadastrar(especie, tipoFarm, dieta, idUser)
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




function listar (req, res){
  especieModel.listar()  

  .then(
    function (resultado) {
      console.log("Listagem de espécies:", resultado);
      res.json(resultado);
    }
  )
  .catch(
    function (erro) {
      console.log(erro);
      console.error("Erro durante a listagem:", erro);
      res.status(500).json(erro.sqlMessage);
    }
  );
}

module.exports = {
  cadastrar,
  listar
};
