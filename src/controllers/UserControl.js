const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    try {
      const user = await User.create({ name });
      return res.json({
        success: true,
        return: {
          message: 'usuario criado',
          user: user,
        },
      });
    } catch (error) {
      return res.json({
        success: false,
        return: 'ocorreu um erro',
      });
    }
  },

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['name'],
      });
      return res.json({
        success: true,
        return: {
          message: 'usuarios encontrados',
          users: users,
        },
      });
    } catch (error) {
      return res.json({
        success: true,
        return: {
          message: 'ocorreu um erro',
        },
      });
    }
  },

  async findById(req, res) {
    try {
      const { user_id } = req.params;
      const users = await User.findByPk(user_id, {
        attributes: ['name'],
        include: [
          { association: 'addresses', attributes: ['street'] },
        ],
      });
      return res.json({
        success: true,
        return: {
          message: 'usuario encontrados',
          users: users,
        },
      });
    } catch (error) {
      return res.json({
        success: true,
        return: {
          message: 'ocorreu um erro',
        },
      });
    }
  },
};
