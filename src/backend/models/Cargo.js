import { Model, DataTypes } from 'sequelize'

class Cargo extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING      
    }, {
      sequelize: connection
    })
  }

  static associate(models){
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor' })
    // this.belongsToMany(models.Funcionario, { foreignKey: 'cargo_id', through: 'funcionario_cargo', as: 'funcionarios' })
  }
}

export default Cargo;