import { Op } from 'sequelize';

import User from '../models/Users';

export default {
  async show(req, res) {

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%uca%'
        }
      },
      include: [
        {association: 'addresses', where: { street: 'Riacho da Cruz' }},
        { 
          association: 'techs',
          requeired: false,
          where: {
            name:{
              [Op.like]: 'React%'
            }
          }
        },
      ]
    })

    return res.json(users);
  }
};

//[Op.iLike] é como se fosse uma variável no lugar da chave, o js permite isso (bizarro).
//já as porcentagens querdizer, considere o que vier %antes e depois%.
//acho que o sqlite não trabalha com o iLike, apenas com o like