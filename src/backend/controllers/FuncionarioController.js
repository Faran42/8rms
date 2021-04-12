import Funcionario from '../models/Funcionario';

import bcrypt from 'bcrypt';
import { v4 as uuidV4 } from "uuid"

export default {

  async index(req, res) {
    const funcionarios = await Funcionario.findAll();

    const funcionariosDivulgavel = funcionarios.map((array) => { 
      const { id, nome, sobrenome, email, setor, cargo, salario } = array 
      return { id, nome, sobrenome, email, setor, cargo, salario }
    })

    console.log('GET - Funcionarios: ', funcionariosDivulgavel)

    return res.json(funcionariosDivulgavel);
  },

  async store(req, res) {
    const { nome, sobrenome, email, password, setor, cargo, administrador, salario } = req.body;

    const id = uuidV4()

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, 5);

    console.log(id, nome, sobrenome, email, hashedPassword, setor, cargo, administrador, salario);
    
    const funcionario = await Funcionario.create({ id, nome, sobrenome, email, password:hashedPassword, setor, cargo, administrador, salario });

    return res.json(funcionario);
  }

  
} 