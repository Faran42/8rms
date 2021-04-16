import User from '../models/Users';

export default {

  async index(req, res) {
    const users = await User.findAll();
    console.log(users)

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;
    
    const user = await User.create({ name, email });

    return res.json(user);
  }  
} 