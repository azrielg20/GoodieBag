const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
  }
});
