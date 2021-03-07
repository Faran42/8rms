import { Router } from 'express'

import UsersController from './controllers/UsersController'
import sessionsController from './controllers/sessionsController'

const router = Router();

router.get('/', (req, res) => {
    res.render('pages/home',{
        userName: ''
    })
});

router.get('/login', (req, res) => {
  res.render('pages/login')
});

router.post('/login', async (req, res) => {
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

router.post('/sessions', sessionsController.create)



router.get('/listagem', (req, res) => {
  res.render('pages/listagem')
});

router.get('/sobre', (req, res) => {
  res.render('pages/sobre')
});

router.get('/contato', (req, res) => {
  res.render('pages/contato')
});

router.get('/dashboard', (req, res) => {
  res.render('pages/dashboard')
});

router.get('/cadastro', (req, res) => {
  res.render('pages/cadastro')});


router.get('/listagem', (req, res) => {
  res.render('pages/listagem')
});

router.get('/users', UsersController.index)
router.post('/users', UsersController.create)
router.get('/users/show', UsersController.show)

export default router;