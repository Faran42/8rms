import Funcionario from '../models/Funcionario';
import Cargo from '../models/Cargo';
import Setor from '../models/Setor';

import bcrypt from 'bcrypt';
import { v4 as uuidV4 } from "uuid"

export default {

  async index(req, res) {
    const funcionarios = await Funcionario.findAll();

    const funcionariosDivulgavel = funcionarios.map((array) => {
      const { id, nome, sobrenome, email, cargo, salario } = array
      return { id, nome, sobrenome, email, cargo, salario }
    })

    console.log('GET - Funcionarios: ', funcionariosDivulgavel)

    // return res.json(funcionariosDivulgavel);
    return res.render('pages/funcionarioIndex', {
      layout: 'dashboard',
      data: funcionariosDivulgavel,
      title: "Lista de Funcionários"
    })
  },

  async cadastroFuncionario(req, res) {

    return res.render('pages/funcionario', {
      layout: 'dashboard',
      cargos: await Cargo.findAll({ raw: true }),
      title: 'Cadastrar Funcionário'
    })

  },

  async store(req, res) {
    const { nome, sobrenome, email, password, cpf, cargo, administrador, salario } = req.body;

    const id = uuidV4()

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, 5);

    const funcionario = await Funcionario.create({ id, nome, sobrenome, email, password: hashedPassword, cpf, cargo, administrador, salario });

    return res.redirect('/funcionario');
  },

  async funcionarioDetalhes(req, res) {
    const { funcionario_id } = req.params;

    const funcionario = await Funcionario.findByPk(funcionario_id)

    console.log(funcionario)

    if (!funcionario) {
      return res.status(400).json({ error: "Funcionario not found" })
    }

    return res.render('pages/funcionarioDetalhes', {
      layout: 'dashboard',
      data: {
        id: funcionario.id,
        nome: funcionario.nome,
        sobrenome: funcionario.sobrenome,
        email: funcionario.email,
        setor: funcionario.setor,
        cargo: funcionario.cargo,
        salario: funcionario.salario
      },
      title: "Editar funcionario"
    })
  },

  async update(req, res) {
    const { funcionario_id } = req.params;
    const { id, nome, sobrenome, email, cpf, setor, cargo, salario } = req.body

    const funcionario = await Funcionario.findByPk(funcionario_id)

    if (!funcionario) {
      return res.status(400).json({ error: "funcionario not found" })
    }

    if (nome) {
      funcionario.nome = nome;
    }

    if (sobrenome) {
      funcionario.sobrenome = sobrenome;
    }
    if (email) {
      funcionario.email = email;
    }
    if (cpf) {
      funcionario.email = cpf;
    }
    if (setor) {
      funcionario.setor = setor;
    }
    if (cargo) {
      funcionario.cargo = cargo;
    }
    if (salario) {
      funcionario.salario = salario;
    }

    funcionario.save();

    return res.status(200).send();
  },

  async delete(req, res) {
    const { funcionario_id } = req.params;

    const funcionario = await Funcionario.findByPk(funcionario_id);

    if (!funcionario) {
      return res.status(400).json({ error: "Cargo not found!" });
    }

    await funcionario.destroy()

    return res.send()
  }
}