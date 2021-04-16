import { Model, DataTypes } from 'sequelize'

class FolhaMensal extends Model {
  static init(connection) {
    super.init({
      mes: DataTypes.STRING,
      ano: DataTypes.NUMBER,
      horasTrabalhadas: DataTypes.NUMBER,
    }, {
      sequelize: connection
    })
  }

  // static associate(models){
  //   this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
  // }
}

export default FolhaMensal;