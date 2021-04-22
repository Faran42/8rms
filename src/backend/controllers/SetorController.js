import Setor from '../models/Setor';

import { v4 as uuidV4 } from 'uuid'

export default {
  async index(req, res) {

    const setor = await Setor.findAll()

    if (!setor) {
      return res.json({ message: "Nenhum Setor cadastrado"})
    }

    const setoresSimplificados = setor.map(array => {
      const novoArray = {
        id: array.id,
        nome: array.nome,
        descricao: array.descricao
      }

      return novoArray
    })

    console.log(setoresSimplificados)

    return res.render('pages/setorIndex', {
      layout: 'dashboard',
      data: setoresSimplificados,
      title: "Lista de Setores"
    })
  },

  async store(req, res){
    console.log(req.body)
    const { nome, descricao } = req.body;

    const SetorJaExiste = await Setor.findOne({ where: { nome }}) 

    if (SetorJaExiste) {
      return res.json({ message: "Setor já cadastrado"})
    }

    const id = uuidV4()

    const setor = await Setor.create({id, nome, descricao});
    console.log(setor)

    return res.redirect('/setor')
  },

  async setorDetalhes(req, res) {
    const { setor_id } = req.params;
    
    const setor = await Setor.findByPk(setor_id)

    console.log(setor)

    if(!setor) {
      return res.status(400).json({ error: "Setor not found"})
    }

    return res.render('pages/setorDetalhes', {
        layout: 'dashboard',
        data: {
          id: setor.id,
          nome: setor.nome,
          descricao: setor.descricao
        },
        title: "Editar Setor"
    })
  },

  async update(req, res) {
    const { setor_id } = req.params;
    const { nome, descricao } = req.body

    const setor = await Setor.findByPk(setor_id)

    if(!setor) {
      return res.status(400).json({ error: "Setor not found"})
    }

    if(nome){
      setor.nome = nome;
    }

    if(descricao) {
      setor.descricao = descricao;
    }

    setor.save();

    return res.status(200).send();
  },

  async delete(req, res) {
    const { setor_id } = req.params;
    console.log(setor_id)
    
    const setor = await Setor.findByPk(setor_id);

    if(!setor) {
      return res.status(400).json({ error: "Setor not found!"});
    }

    await setor.destroy()

    return res.send()
  }
}