'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role ,{through:'User_Roles',as:'role'})
      // define association here
    }
  }
  User.init({
    email:{ type:DataTypes.STRING,
    allowNull:false,
  unique:true},
    password:{ type:DataTypes.STRING,
    allowNull:false,
    validate: {
      len: [5, 10]
  }
  }},
   {
    sequelize,
    modelName: 'Users',
  });
  return User;
};