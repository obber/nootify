import Sequelize from 'sequelize';
import cfg from './config.js';

const sequelize = new Sequelize(cfg.DATABASE, cfg.USERNAME, cfg.PASSWORD, {
  dialect: 'sqlite',
  storage: 'server/db/database.sqlite'
});

export {
  sequelize
};