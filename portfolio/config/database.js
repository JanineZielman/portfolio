module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'janinezielmancms'),
      user: env('DATABASE_USERNAME', 'janine'),
      password: env('DATABASE_PASSWORD', '1I2#z92xa'),
    },
    debug: false,
  },
});
