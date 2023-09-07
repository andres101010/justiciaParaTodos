require('dotenv').config();
const app = require('./app');

const { Sequelize } = require('sequelize');
const { development } = require('../src/config/config');
const sequelize = new Sequelize(development);

sequelize
    .authenticate()
    .then((connection) => {console.log('database authenticate')})
    .catch((err) => console.log(err));

sequelize
    .sync()
    .then(() => console.log('database synced'))
    .catch((err) => console.log(err));

const PORT = process.env.PORT;

app.listen(PORT)
console.log('Puerto corriendo en ', PORT)