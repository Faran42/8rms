import Funcionario from '../models/Funcionario';
import { v4 as uuidV4 } from "uuid"

export default {

  async index(req, res) {
    const funcionarios = await Funcionario.findAll();
    console.log(funcionarios)

    return res.json(funcionarios);
  },

  async store(req, res) {
    const { nome, sobrenome, email, password, setor, cargo, administrador, salario } = req.body;

    const id = uuidV4()

    console.log(id, nome, sobrenome, email, password, setor, cargo, administrador, salario);
    
    const funcionario = await Funcionario.create({ id, nome, sobrenome, email, password, setor, cargo, administrador, salario });

    return res.json(funcionario);
  }

  
} 