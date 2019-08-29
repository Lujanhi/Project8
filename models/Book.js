const Sequelize = require('sequelize')
const Config = require('../config/config')


//use as a fill in the blank templet, it includes a title, author ,genre and year


const Books = Config.define('book', {
    
    title: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Don't leave field empty"
            }
        }
    },

    author: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Don't leave field empty"
            }
        }
    },

    genre: {
        type: Sequelize.STRING,
    },

    year: {
        type: Sequelize.INTEGER,
    }

});

module.exports = Books;