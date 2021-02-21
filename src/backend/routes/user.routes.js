import { Router } from 'express'
import users from '../util/users'

const userRouter = Router();

userRouter.get('/users', (req, res) => {
    res.json(users)
})

userRouter.post('/users', async (req, res) => {
    const { name, password } = req.body

    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        console.log(salt)
        console.log(password)
        console.log(hashedPassword)

        const user = {
            name: name,
            password: hashedPassword
        }
        users.push(user)
        res.status(201).json(user)
    } catch {
        res.status(500).send()
    }    
})



export default userRouter;