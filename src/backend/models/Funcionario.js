import { Model, DataTypes } from 'sequelize'

class Funcionario extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      setor: DataTypes.STRING,
      cargo: DataTypes.STRING,
      administrador: DataTypes.BOOLEAN,
      salario: DataTypes.NUMBER,
    }, {
      sequelize: connection
    })
  }

  // static associate(models){
  //   this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
  // }
}

export default Funcionario;