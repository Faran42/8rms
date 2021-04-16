import Sequelize from 'sequelize';
import dbConfig from '../config/database' 

import Cargo from '../models/Cargo'
import Funcionario from '../models/Funcionario'
import FolhaMensal from '../models/FolhaMensal'
import Setor from '../models/Setor'

import User from '../models/Users'
import Address from '../models/Address'
import Tech from '../models/Tech'

const connection = new Sequelize(dbConfig);

Cargo.init(connection);
Funcionario.init(connection);
FolhaMensal.init(connection);
Setor.init(connection);


User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models)
Address.associate(connection.models)

export default connection;