/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const DEFAULT_CAMPUS_IMAGE_URL = 'https://www.travelandleisure.com/thmb/4i9gLewM45kVsDGloXO5Z9wKlfk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg';

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  image_url: {
    type: Sequelize.STRING,
    defaultValue: DEFAULT_CAMPUS_IMAGE_URL // Add the default value here
  }
  
});

// Export the campus model
module.exports = Campus;