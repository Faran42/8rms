import { Model, DataTypes } from 'sequelize'

class Address extends Model {
  static init(connection) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER
    }, {
      sequelize: connection
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Address;