require('dotenv').config()
console.log('process.env', process.env.NODE_ENV)

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    dialect: 'mysql',
    dialectOptions: {
      dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME || 'arpuyiolglmhza',
    password: process.env.PROD_DB_PASSWORD || '',
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
  }
};