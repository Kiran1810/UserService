'use strict';

const {
  Model
} = require('sequelize');
const { Enums } = require('../utils/common');
const { ADMIN, CUSTOMER, FLIGHT_COMPANY } = Enums.USER_ROLE_ENUMS;

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.Users, {
        through: 'User_Roles',
        as: 'users',
        foreignKey: 'roleId',
        otherKey: 'userId',
      });
    }
  }

  Role.init(
    {
      name: {
        type: DataTypes.ENUM(ADMIN, CUSTOMER, FLIGHT_COMPANY),
        allowNull: false,
        defaultValue: CUSTOMER,
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  return Role;
};
