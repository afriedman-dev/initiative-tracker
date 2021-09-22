module.exports = {
  client: 'pg',
  pool: { min: 10, max: 20 },
  // ssl:true,
  // connection: process.env.DATABASE_URL,
  connection: {
    database: 'initiative-tracker',
    user: 'postgres',
    password: 'Converse12'
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
