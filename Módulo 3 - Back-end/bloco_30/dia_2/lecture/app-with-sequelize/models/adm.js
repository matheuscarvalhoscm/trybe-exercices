const Adm = (sequelize, DataTypes) => {
  const Adm = sequelize.define("Adm", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return Adm;
};

module.exports = Adm;