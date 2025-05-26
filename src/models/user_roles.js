'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations if needed, example:
      // this.belongsTo(models.User, { foreignKey: 'user_Id' });
      // this.belongsTo(models.Role, { foreignKey: 'role_Id' });
    }
  }

  User_Roles.init(
    {
      user_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User_Roles',
      tableName: 'User_Roles', // Optional: to enforce table name
      timestamps: false         // Optional: if you don't want `createdAt/updatedAt`
    }
  );

  return User_Roles;
};
