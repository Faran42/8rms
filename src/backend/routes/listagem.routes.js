import { Router } from 'express'

const listagemRouter = Router();

listagemRouter.get('/', (req, res) => {
    res.render('pages/listagem')
});

export default listagemRouter;