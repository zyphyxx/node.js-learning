const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ocupation: {
    type: DataTypes.STRING,
    required: true
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  }
})

module.export = User;

