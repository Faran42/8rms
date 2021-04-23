import Cargo from '../models/Cargo';
import Setor from '../models/Setor';
import Funcionario from '../models/Funcionario';

import { v4 as uuidV4 } from 'uuid'

export default {
  async index(req, res) {

    // const cargos = await Cargo.count()
    // const setores = await Setor.findAll()
    // const funcionarios = await Funcionario.findAll()

    const dados = {
      cargos: await Cargo.count(), 
      setores: await Setor.count(),
      funcionarios: await Funcionario.count()
    }
  
    return res.render('pages/dashboard', {
      layout: 'dashboard',
      data: dados,
      title: "Dashboard"
    })
  }
}