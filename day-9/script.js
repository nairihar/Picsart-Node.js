require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Users = sequelize.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'users',
  timestamps: false,
});

Users.prototype.getPublic = function() {
  const publicUser = {
    ...this.get({ plain: true }),
  };

  delete publicUser.password;

  return publicUser;
};

// "nairihar"'; drop table
function getUserByEmail() {
  return `select * from users where email=${email} or 1=1`
}

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // const user = await Users.create({
    //   email: 'nairi@gmail.com',
    //   last_name: 'Har',
    //   password: 'sajdhasljdalsdhlasdh'
    // });
    

    // console.log(user.getPublic());

    // const users = await Users.findAll({
    //   where: {
    //     email: {
    //       [Op.between]: [6, 10],  
    //     }
    //   }
    // })

    // users.forEach(user => {
    //   console.log(user.getPublic());
    // });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();