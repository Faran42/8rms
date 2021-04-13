import { Router } from 'express'

import FuncionarioController from './controllers/FuncionarioController'

import sessionsController from './controllers/sessionsController'

import UserController from './controllers/UserController'
import AddressController from './controllers/AddressController'
import TechController from './controllers/TechController'
import ReportController from './controllers/ReportController'

const routes = Router();

routes.get('/', (req, res) => {
    res.render('pages/home',{
        userName: ''
    })
});

routes.get('/login', (req, res) => {
  res.render('pages/login')
});

routes.post('/login', async (req, res) => {
  const { name, password } = req.body
  const user = users.find(user => user.name = name)

  if (!user) {
      return res.status(400).send('Cannot find user')
  }
  try {
      if (await bcrypt.compare(password, user.password)) {
          res.send('Success')
      } else {
          res.send('Not Allowed');
      }
  } catch {
      res.status(500).send()
  }
});

routes.get('/listagem', (req, res) => {
  res.render('pages/listagem')
});

routes.get('/sobre', (req, res) => {
  res.render('pages/sobre')
});

routes.get('/contato', (req, res) => {
  res.render('pages/contato')
});

routes.get('/dashboard', (req, res) => {
  res.render('pages/dashboard')
});

routes.get('/cadastro', (req, res) => {
  res.render('pages/cadastro')
});
  
  
routes.get('/listagem', (req, res) => {
  res.render('pages/listagem')
});

routes.post('/sessions', sessionsController.create)
  
  //rotas de funcionarios

routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.store)


//=====================================================================

//Rotas dedicadas aos testes de implementação da base de dados e suas tabelas.
//Essas rotas não são parte do projeto, e sim testes de aprendizado.

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show);


export default routes;