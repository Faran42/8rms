const { resolve } = require('path');

module.exports = {
  dialect: 'sqlite',
  storage: resolve(__dirname, '../', 'database', '8rms.database.sqlite'),
  logging: true,
  define: {
    timestamps: true, //created_at, updated_at
    underscored: true, //nomes de tableas e colunas em Snake case (nome_nome)

  },
}

// {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true
//   },
//   host: 'tuffi.db.elephantsql.com',
//   username: 'hcjdzvak',
//   password: 'VWkhDsDruUgOLadtX-MCIMFOBwHk2hHZ',
//   database: 'hcjdzvak',
//   define: {

//     timestamps: true, //created_at, updated_at
//     underscored: true, //nomes de tableas e colunas em Snake case (nome_nome)
//   },
// };