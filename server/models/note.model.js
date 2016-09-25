import Sequelize from 'sequelize';
import { sequelize } from '../db';

var Note = sequelize.define('Note', {
  title  : {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Note;