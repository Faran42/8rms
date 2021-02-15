import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.render('pages/home/home')
});

router.get('/login', (req, res) => {
    res.render('pages/login/login')
});

router.get('/cadastro', (req, res) => {
    res.render('pages/cadastro/cadastro')
});

router.get('/listagem', (req, res) => {
    res.render('pages/listagem/listagem')
});

router.get('/sobre', (req, res) => {
    res.render('pages/sobre/sobre')
});

// router.post('/cadastrar/funcionario', (req, res) => {
//     const {nome, idade} = req.body
//     res.json({nome, idade});
// });

export default router;