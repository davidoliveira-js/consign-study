const Address = require('../models/Address');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { street } = req.body;
    try {
      const address = await Address.create({ street, user_id });
      return res.json({
        success: true,
        return: {
          message: 'endereco criado',
          address: address,
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
      const addresses = await Address.findAll({
        attributes: ['street'],
      });
      return res.json({
        success: true,
        return: {
          message: 'enderecos encontrados',
          addresses: addresses,
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
      const { address_id } = req.params;
      const address = await Address.findByPk(address_id, {
        attributes: ['street'],
        include: [{ association: 'user', attributes: ['name'] }],
      });
      return res.json({
        success: true,
        return: {
          message: 'endereço encontrado',
          address: address,
        },
      });
    } catch (error) {
      console.log(error);
      return res.json({
        success: true,
        return: {
          message: 'ocorreu um erro',
        },
      });
    }
  },
};
