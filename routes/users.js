var express = require('express');
var router = express.Router();
//const mongoose = require('mongoose')
const User = require('../models/Users')

/* GET users listing. */
/*router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Primeira Pagina',
    mensagem: 'Seja Bem Vindo'
  });
});
*/
router.get('/', async (req, res,) => {
  try {
    const users = await User.find()

    res.status('200').json(users)

  } catch (error) {
    res.status(500).json({error:error})
  }
});

router.post('/newuser', async (req,res) => {
  const {name, agr, UF, acoes, senha} = req.body
  const user = {
    name,
    age,
    UF,
    acoes,
    senha
  }
  try {
    await User.create(user)
    res.status(201).json({message: 'Usuario Criado com Sucesso'})
  } catch (error) {
    res.status(500).json({error:error})
  }
})

module.exports = router;