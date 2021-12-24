const seedBlogs = require('./blogSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('Database Synced');

  await seedUsers();
  console.log('Users Seeded');

  await seedBlogs();
  console.log('Blogs seeded');

  await seedComments();
  console.log('Comments seeded');

  process.exit(0);
};

seedAll();