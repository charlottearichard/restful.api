const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Mood extends Model {}

Mood.init(
    {
        //create columns 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        mood_name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood',
      }
); 

module.exports = Mood;
