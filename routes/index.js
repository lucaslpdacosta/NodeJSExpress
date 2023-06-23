var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function (req, res, next) {
  res.render('index', { 
    title: 'Primeira Pagina',
    mensagem: 'Seja Bem Vindo'
   });
});

router.get('/new', function (req, res, next) {
  res.render('novoCadastro', { 
    title: 'Novo Cadastro',
    nome : req.body.nome,
    idade: req.body.idade
   });
});

router.post('/new', function(req, res, next){
  let nome = req.body.nome;
  let idade = req.body.idade;
  console.log(`Nome:${nome} Idade: ${idade}`);
  res.send(`Nome:${nome} Idade: ${idade}`);
});
*/
router.get('/', function (req, res, next) {
  global.debug.findAll((e, docs) => {
    if (e) { return console.log(e); }
    res.render('index', { docs });
  })
});

module.exports = router;