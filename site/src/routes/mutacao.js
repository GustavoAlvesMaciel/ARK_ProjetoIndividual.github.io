var express = require("express");
var router = express.Router();

var mutacaoController = require("../controllers/mutacaoController.js");

router.post("/cadastrar", function (req, res) {
    mutacaoController.cadastrar(req, res);
});

router.get("/", function (req, res) {
    mutacaoController.listar(req, res);
});
// Adicione outras rotas conforme necessário

module.exports = router;
