const Address = require('../controllers/AddressControl');

module.exports = (app) => {
  app.get('/addresses', Address.index);
  app.get('/addresses/:address_id', Address.findById);
  app.post('/addresses/create/:user_id', Address.store);
};
