require('dotenv').config(); // load environment variables from .env

module.exports = {
  development: {
    username: process.env.DB_USER,       // e.g., "postgres"
    password: process.env.DB_PASSWORD || null, // if empty, use null
    database: process.env.DB_NAME,       // e.g., "smart_event_platform"
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_TEST_NAME || 'smart_event_platform_test',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  }
};