import Sequelize from 'sequelize';
import dbConfig from '../config/database' 

import Funcionario from '../models/Funcionario'

import User from '../models/Users'
import Address from '../models/Address'
import Tech from '../models/Tech'

const connection = new Sequelize(dbConfig);

Funcionario.init(connection);


User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models)
Address.associate(connection.models)

export default connection;