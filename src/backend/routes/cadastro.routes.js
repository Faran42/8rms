import { Router } from 'express'

const cadastroRouter = Router();

cadastroRouter.get('/', (req, res) => {
    res.render('pages/cadastro')
});

export default cadastroRouter;