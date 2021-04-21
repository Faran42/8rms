import Cargo from '../models/Cargo';

import { v4 as uuidV4 } from 'uuid'

export default {
  async index(req, res) {

    const cargos = await Cargo.findAll()

    if (!cargos) {
      return res.json({ message: "Nenhum cargo cadastrado"})
    }

    const cargosSimplificados = cargos.map(array => {
      const novoArray = {
        id: array.id,
        nome: array.nome,
        descricao: array.descricao
      }

      return novoArray
    })

    console.log(cargosSimplificados)

    //  return res.json(cargosSimplificados)

    return res.render('pages/cargoIndex', {
      layout: 'dashboard',
      data: cargosSimplificados,
      title: "Lista de Cargos"
    })
  },

  async store(req, res){
    console.log(req.body)
    const { nome, descricao } = req.body;

    const cargoJaExiste = await Cargo.findOne({ where: { nome }}) 

    if (cargoJaExiste) {
      return res.json({ message: "Cargo já cadastrado"})
    }

    const id = uuidV4()

    const cargo = await Cargo.create({id, nome, descricao});
    console.log(cargo)

    return res.redirect('/cargo')
  },

  async cargoDetalhes(req, res) {
    const { cargo_id } = req.params;
    
    const cargo = await Cargo.findByPk(cargo_id)

    if(!cargo) {
      return res.status(400).json({ error: "Cargo not found"})
    }

    return res.render('pages/cargoDetalhes', {
        layout: 'dashboard',
        data: {
          nome: cargo.nome,
          descricao: cargo.descricao
        },
        title: "Editar Cargo"
    })
  },

  async update(req, res) {
    const { cargo_id } = req.params;
    const { nome, descricao } = req.body

    const cargo = await Cargo.findByPk(cargo_id)

    if(!cargo) {
      return res.status(400).json({ error: "Cargo not found"})
    }

    if(nome){
      cargo.nome = nome;
    }

    if(descricao) {
      cargo.descricao = descricao;
    }

    cargo.save();

    return res.redirect('/cargo')
  },

  async delete(req, res) {
    const { cargo_id } = req.params;
    
    const cargo = await Cargo.findByPk(cargo_id);

    if(!cargo) {
      return res.status(400).json({ error: "Cargo not found!"});
    }

    await cargo.destroy()

    return res.send()
  }
}