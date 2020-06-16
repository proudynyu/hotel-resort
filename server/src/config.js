const assert = require('assert')

require('dotenv').config();

const {
  HOST,
  PORT
} = process.env;

assert(HOST, 'Host is necessary');
assert(PORT, 'Port is necessary');

module.exports = {
  host: HOST,
  port: PORT
}