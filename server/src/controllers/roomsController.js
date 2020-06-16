const connetion = require('../data/connection');

module.exports = {
  async index(req, res) {
    const data = await connetion('rooms').select('*');
    return res.status(200).json(data)
  }
} 