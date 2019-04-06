module.exports = (sequelize, DataTypes) => {
  const Coupon = sequelize.define('admin', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    reset_token: DataTypes.STRING,
  }, {
  });
  Coupon.associate = function(models) {
    // associations can be defined here
  };


  return Coupon;
};