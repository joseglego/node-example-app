'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    name: DataTypes.STRING,
    countryId: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Enterprise.associate = function(models) {
    // associations can be defined here
  };
  return Enterprise;
};