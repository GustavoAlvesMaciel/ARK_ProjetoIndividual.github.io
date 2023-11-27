var quizModel = require("../models/quizModel");
  
function cadastrar(req, res) {
  console.log("Rota de cadastro acionada");
  var pontuacao = req.body.pontuacaoServer;
  var tentativa = req.body.tentativaServer;
  var erros = req.body.errosServer;
  var idUser = req.body.idUser;

  console.log("Dados recebidos do frontend:", pontuacao, tentativa, erros, idUser);

  if (pontuacao == undefined) {
    res.status(400).send("Sua pontuação está undefined!");
  } else if (tentativa == undefined) {
    res.status(400).send("Sua tentativa está undefined!");
  } else if (erros == undefined) {
    res.status(400).send("Seus erros estão undefined!");
  } else {
    quizModel.cadastrar(pontuacao, tentativa, erros, idUser)
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
  quizModel.listar()  

  .then(
    function (resultado) {
      console.log("Listagem de respostas:", resultado);
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
