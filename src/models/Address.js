const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        street: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'addresses',
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  }
}

module.exports = Address;
