import { Router } from 'express'

import FuncionarioController from './controllers/FuncionarioController'
import CargoController from './controllers/CargoController'
import SetorController from './controllers/SetorController'

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
  res.render('pages/dashboard', {
    layout: 'dashboard',
    title: 'Dashboard'
  })
});

routes.get('/cadastro', (req, res) => {
  res.render('pages/cadastro')
});
  
routes.post('/sessions', sessionsController.create)

routes.get('/tdt', (req, res) => {
  res.render('pages/dataTableTeste', {
    layout: 'dashboard',
    title: 'Teste da data table'
  })
})

//rotas de funcionarios

routes.get('/cadastrar/funcionario', (req, res) => {
  res.render('pages/funcionario', {
    title: 'Cadastrar Funcionário',
    layout: 'dashboard'
  })
})

routes.get('/funcionario', FuncionarioController.index)
routes.get('/funcionario/:funcionario_id', FuncionarioController.funcionarioDetalhes)
routes.post('/funcionario', FuncionarioController.store)
routes.put('/funcionario/:funcionario_id', FuncionarioController.update)
routes.delete('/funcionario/:funcionario_id', FuncionarioController.delete)

//rotas de cargos

routes.get('/cadastrar/cargo', (req, res) => {
  res.render('pages/cargo', {
    layout: 'dashboard',
    title: 'Cadastrar Cargo'
  })
})

routes.get('/cargo', CargoController.index)
routes.get('/cargo/:cargo_id', CargoController.cargoDetalhes)
routes.post('/cargo', CargoController.store)
routes.put('/cargo/:cargo_id', CargoController.update)
routes.delete('/cargo/:cargo_id', CargoController.delete)

//rotas de setor

routes.get('/setor', SetorController.index)
routes.get('/cadastrar/setor', (req, res) => {
  res.render('pages/setor',{
    layout: 'dashboard',
    title: 'Cadastrar Setor'
  })
})

routes.post('/setor', SetorController.store)
routes.get('/setor/:setor_id', SetorController.setorDetalhes)
routes.put('/setor/:setor_id', SetorController.update)
routes.delete('/setor/:setor_id', SetorController.delete)

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