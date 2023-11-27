var express = require("express");
var router = express.Router();

var especieController = require("../controllers/especieController");

router.post("/cadastrar", function (req, res) {
    especieController.cadastrar(req, res);
});

router.get("/", function (req, res) {
    especieController.listar(req, res);
});
// Adicione outras rotas conforme necessário

module.exports = router;
