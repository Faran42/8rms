import Sequelize from 'sequelize';
import dbConfig from '../config/database' 

import User from '../models/Users'
import Address from '../models/Address'
import Funcionario from '../models/Funcionario'

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Funcionario.init(connection);

User.associate(connection.models)
Address.associate(connection.models)

export default connection;