import { Router } from 'express'

import sessionsController from './controllers/sessionsController'

const router = Router();

router.get('/', (req, res) => {
    res.render('pages/home',{
        ano: 2021
    })
});

router.get('/login', (req, res) => {
    res.render('pages/login')
});

router.get('/cadastro', (req, res) => {
    res.render('pages/cadastro')
});

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

router.post('/sessions', (req, res) => {
    
    console.log(req.body.email)
});


export default router;