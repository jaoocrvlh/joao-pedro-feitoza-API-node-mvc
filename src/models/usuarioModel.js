const pool = require('../config/db');

const usuarioModel = {
  async listar() {
    const [rows] = await pool.execute('SELECT * FROM usuarios');
    return rows;
  },

  async criar({ nome, email }) {
    const [result] = await pool.execute(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [nome, email]
    );
    return result.insertId;
  },

  async atualizar(id, { nome, email }) {
    const [result] = await pool.execute(
      'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
      [nome, email, id]
    );
    return result.affectedRows;
  },

  async remover(id) {
    const [result] = await pool.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
    return result.affectedRows;
  }
};

module.exports = usuarioModel;
