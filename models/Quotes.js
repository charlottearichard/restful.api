const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Quotes extends Model {}

Quotes.init(
    {
        //create columns 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        quote_phrase:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 

        quote_by:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 



    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quotes',
      }
); 

module.exports = Quotes;
