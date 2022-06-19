const {DataTypes} = require('sequelize')
const init = (sequelize) => {
  const Test = sequelize.define('Test', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  })
}

module.exports = {
  init,
}
