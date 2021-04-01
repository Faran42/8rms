import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }

  static associate(models){
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })
  }
}


export default User;