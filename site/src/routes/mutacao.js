var express = require("express");
var router = express.Router();

var mutacaoController = require("../controllers/mutacaoController");

router.post("/cadastrar", function (req, res) {
    mutacaoController.cadastrar(req, res);
});

// Adicione outras rotas conforme necessário

module.exports = router;
