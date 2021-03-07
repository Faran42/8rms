import bcrypt from 'bcrypt'

import usersDB from '../util/users'
import sessionsDB from '../util/sessions'

const sessionsController = {

    async create(req, res) {
        const { email, password } = req.body
        const user = usersDB.find(user => user.email = email)
        console.log('User? ',user)
    
        if (!user) {
            return res.status(400).send('Cannot find user')
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                sessionsDB.push(user)

                console.log('Sessions: ',sessionsDB)

                res.status(201).render('pages/loading',{
                    data: user.name,
                    path: '/'
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
    