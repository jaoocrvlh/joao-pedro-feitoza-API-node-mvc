const usuarioModel = require('../models/usuarioModel');

const usuarioController = {
  async listar(req, res) {
    try {
      const usuarios = await usuarioModel.listar();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao listar usuários.' });
    }
  },

  async criar(req, res) {
    try {
      const { nome, email } = req.body;
      if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
      }
      const id = await usuarioModel.criar({ nome, email });
      return res.status(201).json({ id, nome, email });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ erro: 'Email já cadastrado.' });
      }
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao criar usuário.' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
      }
      const afetados = await usuarioModel.atualizar(id, { nome, email });
      if (afetados === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }
      return res.status(200).json({ id: Number(id), nome, email });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ erro: 'Email já cadastrado.' });
      }
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao atualizar usuário.' });
    }
  },

  async remover(req, res) {
    try {
      const { id } = req.params;
      const afetados = await usuarioModel.remover(id);
      if (afetados === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }
      return res.status(200).json({ mensagem: 'Usuário removido com sucesso.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao remover usuário.' });
    }
  }
};

module.exports = usuarioController;
