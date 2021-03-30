import User from '../models/Users';

export default {
  async store(req, res) {
    const { name, email} = req.body;
    
    const user = await User.create({ name, email });

    return res.json(user);
  }
} 