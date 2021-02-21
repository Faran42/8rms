import { Router } from 'express'

import loginRouter from './login.routes'
import cadastroRouter from './cadastro.routes'
import listagemRouter from './listagem.routes'


const router = Router();

router.use('/login', loginRouter);
router.use('/cadastro', cadastroRouter);
router.use('/listagem', listagemRouter);

router.get('/', (req, res) => {
    res.render('pages/home',{
        userName: "Lobinho d=(^_^)=b"
    })
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