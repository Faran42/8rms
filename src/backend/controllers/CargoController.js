import Cargo from '../models/Cargo';
import Setor from '../models/Setor';

import { v4 as uuidV4 } from 'uuid'

export default {
  async index(req, res) {

    const cargos = await Cargo.findAll({include: 'setor', raw: false})

    console.log(cargos)

    if (!cargos) {
      return res.json({ message: "Nenhum cargo cadastrado" })
    }

    const cargosSimplificados = cargos.map(array => {
      const novoArray = {
        id: array.id,
        nome: array.nome,
        descricao: array.descricao,
        setor: array.setor.nome,      
     }

      return novoArray
    })

    console.log(cargosSimplificados)
    // return res.json(cargos)
    return res.render('pages/cargoIndex', {
      layout: 'dashboard',
      data: cargosSimplificados,
      title: "Lista de Cargos"
    })
  },

  async cadastrarCargo(req, res) {
    const setores = await Setor.findAll({ raw: true })
    console.log(setores)
    return res.render('pages/cargo', {
      layout: 'dashboard',
      setores: await Setor.findAll({ raw: true }),
      title: 'Cadastrar Cargo'
    })

  },

  async store(req, res) {
    const { setor_id, nome, descricao } = req.body;

    console.log(setor_id, nome, descricao)

    const cargoJaExiste = await Cargo.findOne({ where: { nome } })

    if (cargoJaExiste) {
      return res.json({ message: "Cargo já cadastrado" })
    }

    const id = uuidV4()

    const cargo = await Cargo.create({ id, nome, descricao, setor_id });
    console.log(cargo)

    return res.redirect('/cargo')
  },

  async cargoDetalhes(req, res) {
    const { cargo_id } = req.params;

    const cargo = await Cargo.findByPk(cargo_id)

    console.log(cargo)

    if (!cargo) {
      return res.status(400).json({ error: "Cargo not found" })
    }

    return res.render('pages/cargoDetalhes', {
      layout: 'dashboard',
      data: {
        id: cargo.id,
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

    if (!cargo) {
      return res.status(400).json({ error: "Cargo not found" })
    }

    if (nome) {
      cargo.nome = nome;
    }

    if (descricao) {
      cargo.descricao = descricao;
    }

    cargo.save();

    return res.status(200).send();
  },

  async delete(req, res) {
    const { cargo_id } = req.params;

    const cargo = await Cargo.findByPk(cargo_id);

    if (!cargo) {
      return res.status(400).json({ error: "Cargo not found!" });
    }

    await cargo.destroy()

    return res.send()
  }
}