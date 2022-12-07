'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// sequelize 객체 생성시 매개변수로 "db명 , 사용자, 비번, 설정정보 전체" 정보를 받음
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db ={"sequelize": sequelize, "Sequelize": Sequelize}


module.exports = db;
// db 객체를 내보냄