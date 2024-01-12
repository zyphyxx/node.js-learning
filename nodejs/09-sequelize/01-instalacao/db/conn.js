const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize2','springstudent','springstudent',{host: 'localhost', dialect: 'mysql'});

try {

  sequelize.authenticate()
  console.log('Conectamos com sucesso com o Sequelize');
  
} catch (err) {
  console.log('Não foi possivel conectar:', err);
}

module.export = sequelize;