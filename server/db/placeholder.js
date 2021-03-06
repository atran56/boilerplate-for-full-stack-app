const Sequelize = require('sequelize')
const db = require('./db')

const Placeholder = db.define('placeholder', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Placeholder;