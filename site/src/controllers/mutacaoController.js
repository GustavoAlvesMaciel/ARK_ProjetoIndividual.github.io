var mutacaoModel = require("../models/mutacaoModel"); // Alterado aqui

function cadastrar(req, res) {
  console.log("Rota de cadastro acionada");
  var especie = req.body.especieServer;
  var genero = req.body.generoServer;
  var ancestrais = req.body.ancestraisServer;
  var lvl = req.body.lvlServer;
  var hp = req.body.hpServer;
  var st = req.body.stServer;
  var ox = req.body.oxServer;
  var fo = req.body.foServer;
  var we = req.body.weServer;
  var dm = req.body.dmServer;
  var mo = req.body.moServer;
  var idUser = req.body.idUser;

  console.log("Dados recebidos do frontend:", especie, genero, ancestrais, lvl, hp, st, ox, fo, we, dm, mo, idUser);

  if (especie == undefined) {
    res.status(400).send("Sua espécie está undefined!");
  } else if (genero == undefined) {
    res.status(400).send("Seu genero está undefined!");
  } else if (ancestrais == undefined) {
    res.status(400).send("Seus ancestrais está undefined!");
  } else if (lvl == undefined) {
    res.status(400).send("Seu lvl está undefined!");
  } else if (hp == undefined) {
    res.status(400).send("Seu hp está undefined!");
  } else if (st == undefined) {
    res.status(400).send("Seu st está undefined!");
  } else if (ox == undefined) {
    res.status(400).send("Seu ox está undefined!");
  } else if (fo == undefined) {
    res.status(400).send("Seu fo está undefined!");
  } else if (we == undefined) {
    res.status(400).send("Seu we está undefined!");
  } else if (dm == undefined) {
    res.status(400).send("Seu dm está undefined!");
  } else if (mo == undefined) {
    res.status(400).send("Seu mo está undefined!");
  } else {
    mutacaoModel.cadastrar(especie, genero, ancestrais, lvl, hp, st, ox, fo, we, dm, mo, idUser) // Alterado aqui
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
  mutacaoModel.listar()  

  .then(
    function (resultado) {
      console.log("Listagem de mutacao:", resultado);
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
