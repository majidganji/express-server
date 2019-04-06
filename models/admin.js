module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    reset_token: DataTypes.STRING,
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };


  return Admin;
};