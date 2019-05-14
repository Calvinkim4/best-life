const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'best_life_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
}});



const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  current_weight: Sequelize.INTEGER,
  goal_weight:Sequelize.INTEGER,
  calorie_intake: Sequelize.INTEGER
});

const Entry = sequelize.define('entry', {
  total_amount: Sequelize.INTEGER,
  date: Sequelize.DATE
})


const Food = sequelize.define('food', {
  name: Sequelize.STRING,
  total_calories: Sequelize.INTEGER
});

const Exercise = sequelize.define('exercise', {
  name: Sequelize.STRING,
  total_calories: Sequelize.INTEGER
});


Exercise.belongsTo(Entry);
Entry.belongsTo(User);
Food.belongsTo(Entry);
User.hasMany(Entry, {onDelete: 'cascade'});
Entry.hasMany(Food, {onDelete: 'cascade'});
Entry.hasMany(Exercise, {onDelete:'cascade'});



module.exports = {
  sequelize,
  User,
  Entry,
  Food,
  Exercise
};
