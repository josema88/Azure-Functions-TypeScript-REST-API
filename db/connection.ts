import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = Number(process.env.DB_PORT) || 1433;

const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'mssql',
    dialectOptions: {
        requestTimeout: 30000, // timeout = 30 seconds
        options: {
            encrypt: true,
        }
    }
} );

export default db;