const { sequelize } = require('./models.js');

async function resetDb() {
 try {
   await sequelize.sync({force: true});
   console.log('database syncd');
 } catch (e) {
   console.error(e);
 } finally {
   process.exit();
 }
}

resetDb();