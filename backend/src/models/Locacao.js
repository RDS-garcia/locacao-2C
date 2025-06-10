const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Localizacao = sequelize.define('locacoes', {
    loc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    loc_usu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'usu_id'
        }
    },
    loc_sala_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'salas',
            key: 'sal_id'
        }
    }
})