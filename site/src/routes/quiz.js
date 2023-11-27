var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.get("/", function (req, res) {
    quizController.listar(req, res);
});
// Adicione outras rotas conforme necessário

module.exports = router;
