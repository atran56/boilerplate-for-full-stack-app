const db = require("./db");

//require models here
const Placeholder = require('./placeholder')

//assosications go here!

module.exports = {
  db,
  models: {
    Placeholder
  },
};