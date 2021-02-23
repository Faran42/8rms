import { Router } from 'express'

import sessionsController from '../controllers/sessionsController'

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('pages/login')
});

loginRouter.post('/login', async (req, res) => {
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

loginRouter.post('/sessions', sessionsController.create)

export default loginRouter;