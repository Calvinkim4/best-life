const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/best_life_db', {
  database: 'best_life_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
}});

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'email is required'
    },
    unique: {
      args: true,
      msg: 'email must be unique'
    },
    validate: {
      isEmail: {
        args: true,
        msg: 'email format is invalid'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'password is required'
    }
  },
  current_weight: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  goal_weight: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  calorie_intake: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

const Entry = sequelize.define('entry', {
  total_amount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  }
});


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

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

module.exports = {
  sequelize,
  User,
  Entry,
  Food,
  Exercise
};
