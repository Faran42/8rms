import bcrypt from 'bcrypt'

import usersDB from '../util/users'

const userController =  {
    index(req, res){
        res.render('pages/cadastroUsuario')
    },

    async create(req, res){
        
        try {
            const { email, password} = req.body
            console.log(req.body)
            
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password, salt)
    
            console.log(salt)
            console.log(password)
            console.log(hashedPassword)
    
            const user = {
                email: email,
                password: hashedPassword
            }
            usersDB.push(user)
            res.status(201).redirect('/')
            console.log(usersDB)
        } catch(e) {
            console.log(e)
            res.status(500).send()
        }
    }    
}

export default userController;