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

  // static associate(models){
  //   this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
  // }
}

export default Setor;