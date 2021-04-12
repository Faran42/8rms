import bcrypt from 'bcrypt'

import usersDB from '../util/users'

import Funcionario from '../models/Funcionario';

import sessionsDB from '../util/sessions'

const sessionsController = {

    async create(req, res) {
        const { email, password } = req.body

        console.log('EMAIL: ', email)
        const funcionario = await Funcionario.findOne({ where: { email: email } })
        const { id } = funcionario
        console.log('Funcionário? ',id)
    
        if (!funcionario) {
            return res.status(400).send('Cannot find funcionario')
        }

        try {
            if (await bcrypt.compare(password, funcionario.password)) {
                sessionsDB.push(funcionario)

                // console.log('Sessions: ',sessionsDB)

                res.status(201).render('pages/loading',{
                    data: funcionario.nome,
                    path: '/dashboard'
                })
                
            } else {
                res.send('Not Allowed');
            }
        } catch(e) {
            console.log(e)
            res.status(500).send()
        }
    }
}

export default sessionsController
    