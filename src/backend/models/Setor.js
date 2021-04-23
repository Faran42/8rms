import { Model, DataTypes } from 'sequelize'

class Setor extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING      
    }, {
      sequelize: connection,
      tableName: 'setores'
    })
  }

  static associate(models){
    this.hasMany(models.Cargo, { foreignKey: 'setor_id', as: 'cargos' })
  }
}

export default Setor;