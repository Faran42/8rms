import bcrypt from 'bcrypt';
import usersDB from '../util/users';

import User from '../models/Users';

const userController =  {
    index(req, res){
        res.render('pages/cadastroUsuario')
    },

    async store(req, res){
        
        try {
            const {name, email, password} = req.body
            
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const user = {
                name: name,
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
    },    

    show(req, res){
      res.json(usersDB)
    }
}

export default userController;