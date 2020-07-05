import * as Yup from 'yup';

import Contatos from '../models/Contatos';

class ContatosController {
  async index(req, res) {
    let contatos = await Contatos.findAll();
    return res.json(contatos);
  }

  async findById(req, res) {
    const { id } = req.params;
    let contato = await Contatos.findById(id);
    if (!contato) {
      return res.json({ mensagem: 'Contato inexistente' });
    }
    return res.json(contato);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      telefone: Yup.number(),
      email: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação!' });
    }

    await Contatos.create(
      req.body
    );

    return res.json({ mensagem: 'Criado com sucesso' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required('A phone number is required'),
      telefone: Yup.number(),
      email: Yup.string().required()
    });

    const { id } = req.params;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação!' });
    }

    let retorno = await Contatos.update(
      req.body, id
    );
    if (!retorno) {
      return res.json({ mensagem: 'Contato inexistente' });
    }
    return res.json({ mensagem: 'Atualizado com sucesso' });
  }

  async delete(req, res) {
    const { id } = req.params;
    let retorno = await Contatos.deletar(id);
    if (!retorno) {
      return res.json({ mensagem: 'Contato inexistente' });
    }
    return res.json({ mensagem: 'Deletado com sucesso' });
  }
}

export default new ContatosController();
