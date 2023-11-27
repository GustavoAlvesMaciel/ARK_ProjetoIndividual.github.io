var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefinda!");
  } else {
    usuarioModel.autenticar(email, senha)
      .then(
        function (resultadoAutenticar) {
          console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
          console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

          if (resultadoAutenticar.length == 1) {
            console.log(resultadoAutenticar);
            res.json({
              id: resultadoAutenticar[0].id,
              email: resultadoAutenticar[0].email,
              senha: resultadoAutenticar[0].senha
            });
            return true
          } else if (resultadoAutenticar.length == 0) {
            res.status(403).send("Email e/ou senha inválido(s)");
          } else {
            res.status(403).send("Mais de um usuário com o mesmo login e senha!");
          }
        }
      )
      .catch(
        function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var genero = req.body.generoServer;
  var jogo = req.body.jogoServer;

  console.log("Dados recebidos do frontend:", nome, email, senha, genero, jogo);

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (genero == undefined) {
    res.status(400).send("Seu genêro está undefined!");
  } else if (jogo == undefined) {
    res.status(400).send("Seu modo de jogo está undefined!");
  } else {
    usuarioModel.cadastrar(nome, email, senha, genero, jogo)
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
  autenticar,
  cadastrar
}
