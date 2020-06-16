const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'data', 'dev.sqlite3')
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'data', 'migrations'), 
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'data', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
