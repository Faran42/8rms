// Update with your config settings.
const path = require('path')


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'backend', 'database', 'database.sqlite'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'backend', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },
};
