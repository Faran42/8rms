import { Model, DataTypes } from 'sequelize'

class Funcionario extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.NUMBER,
      cargo: DataTypes.STRING,
      administrador: DataTypes.BOOLEAN,
      salario: DataTypes.NUMBER,
    }, {
      sequelize: connection
    })
  }

  static associate(models){
    this.belongsToMany(models.Cargo, { foreignKey: 'funcionarios_id', through: 'funcionario_cargo', as: 'cargos' })
  }
}

export default Funcionario;