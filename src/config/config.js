require('dotenv').config();
module.exports = {
  development: {
    // username: process.env.USERNAME,
    // password: process.env.PASSWORD,
    // database: process.env.NAME_DB,
    // host: process.env.HOST_DB,
    // dialect: process.env.DB_DIALECT,
    // port: 5432,
    // logging: true,
    username: 'postgres',
    password: 'root',
    database: 'db_justicia_para_todos',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: true
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
