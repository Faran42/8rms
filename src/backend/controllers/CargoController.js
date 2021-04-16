import Cargo from '../models/Cargo';

import { v4 as uuidV4 } from 'uuid'

export default {
  async index(req, res) {

    const cargos = await Cargo.findAll()
    console.log(cargos)

    if (!cargos) {
      return res.json({ message: "Nenhum cargo cadastrado"})
    }

    return res.json(cargos)
  },

  async store(req, res){
    const { nome, descricao } = req.body;

    const cargoJaExiste = await Cargo.findOne({ where: { nome }}) 

    if (cargoJaExiste) {
      return res.json({ message: "Cargo já cadastrado"})
    }

    const id = uuidV4()

    const cargo = await Cargo.create({id, nome, descricao});
    console.log(cargo)
    return res.json(cargo)
  }
}