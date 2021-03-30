import { Router } from 'express'

// import UsersController from './controllers/UsersController'
import UserController from './controllers/UserController'
import sessionsController from './controllers/sessionsController'

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
})

routes.post('/sessions', sessionsController.create)



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
  res.render('pages/cadastro')});


routes.get('/listagem', (req, res) => {
  res.render('pages/listagem')
});

// routes.get('/users', UsersController.index)
// routes.post('/users', UsersController.create)
// routes.get('/users/show', UsersController.show)

routes.post('/users', UserController.store)

export default routes;