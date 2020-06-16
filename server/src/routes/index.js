const { Router } = require('express');
const roomsController = require('../controllers/roomsController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello World !!!')
});

routes.get('/api/v1/rooms', roomsController.index);

module.exports = routes;